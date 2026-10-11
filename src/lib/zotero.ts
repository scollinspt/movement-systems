const ZOTERO_GROUP_ID = "6710776";
const ZOTERO_GROUP_SLUG = "human-movement-system-lab";
const ZOTERO_API_BASE = `https://api.zotero.org/groups/${ZOTERO_GROUP_ID}`;

export const zoteroCollectionKeys = {
  foundations: "7AAVAZII",
  measurement: "P3Q4QJPU",
  modeling: "J72S2TGP",
  clinical: "IBJ2UXFR",
  projects: "QFQXQ3TV",
  seminar: "J4753JJK",
  movesenseOpenSense: "PECEUUB6",
  ventilatoryPump: "C57MK8PN",
  movementSystemPhysicalTherapy: "UZ2GTNK3",
} as const;

const expectedCollectionNames: Record<string, string> = {
  [zoteroCollectionKeys.foundations]: "01 Foundations and Theory",
  [zoteroCollectionKeys.measurement]: "02 Measurement Science",
  [zoteroCollectionKeys.modeling]: "03 Modeling and Simulation",
  [zoteroCollectionKeys.clinical]: "04 Clinical and Applied Movement",
  [zoteroCollectionKeys.projects]: "05 HMS Lab Projects",
  [zoteroCollectionKeys.seminar]: "06 HMS Lab Seminar",
  [zoteroCollectionKeys.movesenseOpenSense]: "Movesense–OpenSense Integration",
  [zoteroCollectionKeys.ventilatoryPump]: "Ventilatory Pump Measurement and Mechanics",
  [zoteroCollectionKeys.movementSystemPhysicalTherapy]:
    "The Movement System in Physical Therapy: Identity, Expertise, and Diagnosis",
};

export type ZoteroCollection = {
  key: string;
  name: string;
  parentCollection: string | false;
  itemCount: number;
  url: string;
};

export type ZoteroLibrarySnapshot = {
  collections: Record<string, ZoteroCollection>;
  itemCount: number;
  synchronizedAt: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function collectionUrl(key: string) {
  return `https://www.zotero.org/groups/${ZOTERO_GROUP_ID}/${ZOTERO_GROUP_SLUG}/collections/${key}/collection`;
}

function parseCollection(value: unknown): ZoteroCollection {
  if (!isRecord(value) || !isRecord(value.data) || !isRecord(value.meta)) {
    throw new Error("Zotero returned an invalid collection record.");
  }

  const key = value.key;
  const name = value.data.name;
  const parentCollection = value.data.parentCollection;
  const itemCount = value.meta.numItems;

  if (
    typeof key !== "string" ||
    typeof name !== "string" ||
    (typeof parentCollection !== "string" && parentCollection !== false) ||
    typeof itemCount !== "number" ||
    !Number.isInteger(itemCount) ||
    itemCount < 0
  ) {
    throw new Error("Zotero returned incomplete collection data.");
  }

  return {
    key,
    name,
    parentCollection,
    itemCount,
    url: collectionUrl(key),
  };
}

async function fetchZotero(path: string) {
  const response = await fetch(`${ZOTERO_API_BASE}${path}`, {
    headers: {
      "Zotero-API-Version": "3",
    },
  });

  if (!response.ok) {
    throw new Error(
      `Zotero API request failed with ${response.status} ${response.statusText}: ${path}`,
    );
  }

  return response;
}

async function fetchCollections() {
  const collections: ZoteroCollection[] = [];
  const limit = 100;

  for (let start = 0; ; start += limit) {
    const response = await fetchZotero(`/collections?limit=${limit}&start=${start}`);
    const value: unknown = await response.json();

    if (!Array.isArray(value)) {
      throw new Error("Zotero returned an invalid collection list.");
    }

    collections.push(...value.map(parseCollection));
    if (value.length < limit) {
      break;
    }
  }

  return Object.fromEntries(collections.map((collection) => [collection.key, collection]));
}

async function fetchTopLevelItemCount() {
  const response = await fetchZotero("/items/top?format=keys");
  const body = (await response.text()).trim();

  if (!body) {
    throw new Error("Zotero returned no top-level items for the HMS Lab library.");
  }

  const keys = body.split(/\s+/);
  if (keys.some((key) => !/^[A-Z0-9]{8}$/.test(key)) || new Set(keys).size !== keys.length) {
    throw new Error("Zotero returned invalid or duplicate top-level item keys.");
  }

  return keys.length;
}

function validateRequiredCollections(collections: Record<string, ZoteroCollection>) {
  for (const [key, expectedName] of Object.entries(expectedCollectionNames)) {
    const collection = collections[key];
    if (!collection) {
      throw new Error(`Required Zotero collection ${key} is missing.`);
    }
    if (collection.name !== expectedName) {
      throw new Error(
        `Zotero collection ${key} was renamed from "${expectedName}" to "${collection.name}".`,
      );
    }
  }
}

export async function getZoteroLibrarySnapshot(): Promise<ZoteroLibrarySnapshot> {
  const [collections, itemCount] = await Promise.all([
    fetchCollections(),
    fetchTopLevelItemCount(),
  ]);

  validateRequiredCollections(collections);

  return {
    collections,
    itemCount,
    synchronizedAt: new Date().toISOString(),
  };
}

export function getZoteroCollection(
  snapshot: ZoteroLibrarySnapshot,
  key: string,
): ZoteroCollection {
  const collection = snapshot.collections[key];
  if (!collection) {
    throw new Error(`Zotero collection ${key} is unavailable.`);
  }

  return collection;
}

export function formatSynchronizationDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeZone: "America/New_York",
  }).format(new Date(value));
}

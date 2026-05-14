import { writable, derived } from 'svelte/store';

/**
 * Catalogue of resources promoting healthy, mindful, and disciplined living.
 * Each item is structured for use with Card and Modal components.
 */
const initialCatalogue = [
    {
        id: "1",
        title: "Dregs Drought",
        description: "A  3d model made for a 4th year project called Blackout Jack.",
        category: "movement",
        tags: ["mindfulness", "morning", "mobility"],
        featured: false,
        image: "/images/catalogue/item-1.png"
    },
    {
        id: "2",
        title: "Pegasus Drawing",
        description: "A 2D drawing that demonstrates texture and shading.",
        category: "focus",
        tags: ["focus", "discipline", "organisation"],
        featured: false,
        image: "/images/catalogue/item-2.png"
    },
    {
        id: "3",
        title: "3d contruction crane",
        description: "A 3D crane with HD textures and shaders",
        category: "reflection",
        tags: ["stoicism", "gratitude", "habit"],
        featured: true,
        image: "/images/catalogue/item-3.png"
    },
    {
        id: "4",
        title: "Spray style mustang",
        description: "A 2D drawing of a mustang with spray paint style shading and highlights",
        category: "calm",
        tags: ["zen", "calm", "resilience"],
        featured: true,
        image: "/images/catalogue/item-4.png"
    },
    {
        id: "5",
        title: "Red planet digital painting",
        description: "A 2D digital paint of a fictional planet, showcasing skill in depth design",
        category: "presence",
        tags: ["mindfulness", "nature", "ritual"],
        featured: true,
        image: "/images/catalogue/item-5.png"
    },
    {
        id: "6",
        title: "Mars",
        description: "Another 2D digital painting of the planet mars",
        category: "discipline",
        tags: ["bushido", "self-awareness", "growth"],
        featured: false,
        image: "/images/catalogue/item-6.png"
    },
    {
        id: "7",
        title: "lost",
        description: "a piece utilising depth, lighting and stylised design, conveying the question of purpose",
        category: "resilience",
        tags: ["stoicism", "grit", "mental clarity"],
        featured: false,
        image: "/images/catalogue/item-7.png"
    },
    {
        id: "8",
        title: "Treasure planet",
        description: "A 2D artwork inspired by the 2002 film treasure planet, the loot of a thousand worlds.",
        category: "nutrition",
        tags: ["fasting", "clarity", "minimalism"],
        featured: false,
        image: "/images/catalogue/item-8.png"
    },
    {
        id: "9",
        title: "hawaii poster",
        description: "a photobash project to make a poster design for hawaii",
        category: "strength",
        tags: ["posture", "calisthenics", "movement"],
        featured: false,
        image: "/images/catalogue/item-9.png"
    },
    {
        id: "10",
        title: "medieval",
        description: "A photobash project focusing on depth and lighting",
        category: "focus",
        tags: ["visualisation", "mental rehearsal", "intention"],
        featured: false,
        image: "/images/catalogue/item-10.png"
    },
    {
        id: "11",
        title: "Datura",
        description: "A 2D drawing capturing the delirim that comes from the devils trumpet",
        category: "discipline",
        tags: ["resilience", "health", "willpower"],
        featured: false,
        image: "/images/catalogue/item-11.png"
    },
    {
        id: "12",
        title: "scythe",
        description: "american traditional tattoo design of a scythe",
        category: "focus",
        tags: ["productivity", "mental clarity", "journaling"],
        featured: false,
        image: "/images/catalogue/item-12.png"
    },
    {
        id: "13",
        title: "dagger",
        description: "american traditional tattoo design of a blade with ornate flowers",
        category: "values",
        tags: ["bushido", "identity", "reflection"],
        featured: false,
        image: "/images/catalogue/item-13.png"
    },
    {
        id: "14",
        title: "Snow patrol",
        description: "A Tattoo I professionally done, this work demonstrates confidence in skill and the maticulous focus required for such work",
        category: "ritual",
        tags: ["gratitude", "humility", "presence"],
        featured: false,
        image: "/images/catalogue/item-14.png"
    },
    {
        id: "15",
        title: "Two faced",
        description: "A professionally done tattoo featuring percise fine line design, showing consistency and focus throughout",
        category: "presence",
        tags: ["ritual", "zen", "stillness"],
        featured: false,
        image: "/images/catalogue/item-15.png"
    }
];


// Writable store
export const catalogue = writable(initialCatalogue);


// Derived store: unique categories
export const categories = derived(catalogue, $catalogue => {
    const set = new Set($catalogue.map(item => item.category));
    return Array.from(set).sort();
});


// Derived store: unique tags (flattened and sorted)
export const tags = derived(catalogue, $catalogue => {
    const allTags = $catalogue.flatMap(item => item.tags || []);
    const tagSet = new Set(allTags.map(tag => tag.trim().toLowerCase()));
    return Array.from(tagSet).sort();
});

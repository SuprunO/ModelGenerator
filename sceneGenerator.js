// === CONFIGURATION ===
const config = {
    fashion: {
      hair_color: ["black"],
      lip_color: ["red"],
      mood: ["powerful", "elegant", "modern", "luxurious"],
      colorThemes: [
        "pastel tones",
        "metallic palette",
        "earthy warm hues",
        "cool monochrome",
        "sunset orange and gold",
        "neon streetlight tones"
      ]
    },
    yoga: {
      hair_color: ["black"],
      lip_color: ["nude", "natural"],
      mood: ["calm", "focused", "graceful", "energetic"],
      colorThemes: [
        "soft pastels",
        "earthy tones",
        "muted neutrals",
        "sunrise colors"
      ]
    },
    bedroom: {
      hair_color: ["black"],
      lip_color: ["nude", "soft pink", "natural"],
      mood: ["intimate", "dreamy", "romantic", "relaxed"],
      colorThemes: [
        "warm candlelight tones",
        "soft beige palette",
        "creamy whites",
        "pale rose and amber glow"
      ]
    }
  };
  
  const photographers = [
    "Ellen von Unwerth","Guy Bourdin","Mert & Marcus","Steven Klein","Nick Knight",
    "Camilla Akrans","Patrick Demarchelier","Mario Testino","Juergen Teller",
    "Tim Walker","David LaChapelle","Terry Richardson","Miles Aldridge",
    "Sølve Sundsbø","Paolo Roversi","Viviane Sassen","Ryan McGinley","David Bellemere"
  ];
  
  const outfitSets = {
    fashion: [
      "avant-garde black draped gown inspired by runway aesthetics",
      "tailored asymmetric blazer and wide-leg trousers",
      "sleek minimalist jumpsuit with geometric cutouts",
      "bold red silk cocktail dress with draping"
    ],
    yoga: [
      "fitted pastel tank top and high-waist leggings",
      "breathable cropped hoodie with stretch pants",
      "soft knit sports bra and matching leggings"
    ],
    bedroom: [
      "silk nightgown with lace trim",
      "satin pajama set with shorts",
      "lace bralette and matching panties"
    ]
  };
  
  const accessorySets = {
    fashion: [
      "diamond choker and hoop earrings",
      "layered gold chains and cuff bracelets",
      "pearl necklace and leather belt with gold buckle"
    ],
    yoga: [
      "simple pendant and silk headband",
      "bead bracelet and scrunchie",
      "gemstone necklace and small hair clip"
    ],
    bedroom: [
      "delicate chain and pearl hair clip",
      "heart pendant and lace gloves",
      "lariat necklace and gemstone ring"
    ]
  };
  
  const skinStyles = [
    "flawless skin with natural texture",
    "soft matte finish with subtle warmth",
    "glowing skin with realistic highlights and shadows"
  ];
  
  const poseOptions = [
    "runway walk with confident stride, body slightly turned, dynamic movement",
    "hands on hips, torso angled, strong posture, head tilted slightly upward",
    "over-the-shoulder glance, soft facial expression, subtle body twist",
    "leaning casually against wall, one leg bent, relaxed arms",
    "sitting with crossed legs, elegant posture, soft gaze at camera",
    "hand in hair, playful expression, slight torso twist, relaxed shoulders",
    "lying on bed gracefully, legs slightly bent, soft natural lighting",
    "stretching after waking up, arms above head, casual relaxed pose",
    "twirling or spinning, skirt or hair flowing, captured mid-motion",
    "kneeling with one hand on knee, strong lines, fashion-forward posture",
    "crouching low, edgy street style, angled shoulders, gaze forward",
    "walking towards camera, confident stride, subtle wind in hair",
    "leaning on railing, relaxed posture, cityscape in background",
    "crossing street mid-step, natural stride, capturing motion blur",
    "sitting on floor with one knee up, arms draped casually, soft gaze"
  ];
  
  const cameraOptions = ["50mm lens","85mm lens","35mm lens"];
  const cameraAngles = [
    "slightly above, capturing full body and outfit details",
    "eye level, natural portrait perspective with soft background blur",
    "low angle, emphasizing height and power, dramatic perspective",
    "from the side, highlighting profile and body contours",
    "overhead shot, dynamic top-down composition, emphasizing movement",
    "three-quarter angle, classic fashion editorial style",
    "close-up on face with shallow depth of field, background softly blurred",
    "wide-angle capturing full environment and model interaction",
    "angled from below with perspective lines leading to model",
    "slightly tilted frame, cinematic editorial look, creative composition"
  ];
  const lightingOptions = [
    "evenly diffused daylight with natural highlights",
    "cinematic top light with smooth falloff",
    "dramatic side lighting with soft shadows and depth",
    "sunlight through large window, gentle ambient glow",
    "warm evening light with subtle reflections"
  ];
  
  const backgroundTextures = [
    "richly textured backdrop with soft tonal depth",
    "subtle fabric-like texture with fine details",
    "luxurious warm-toned surfaces with depth and shadow play",
    "natural tactile materials with soft focus and realistic lighting"
  ];
  
  const detailedBackgrounds = {
    fashion: [
      "Paris rooftop at sunset",
      "fashion runway with warm lights",
      "studio with wooden floor and softbox lighting"
    ],
    yoga: [
      "sunlit yoga studio with potted plants",
      "serene park at golden hour",
      "minimalist indoor space with bamboo mats"
    ],
    bedroom: [
      "cozy bedroom with linen sheets and warm lamp glow",
      "luxurious suite with silk curtains and soft shadows",
      "romantic morning light through sheer curtains"
    ]
  };
  
  // === HELPERS ===
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function sanitize(text) {
    return text ? text.replace(/[\r\n]+/g, " ").replace(/"/g, '\\"').trim() : "";
  }
  
  // === MAIN ===
  const input = $json || {};
  const sceneType = config[input.sceneType] ? input.sceneType : "fashion";
  const sceneConfig = config[sceneType];
  
  const results = [];
  
  const count = input.count || 5;
  const bodyDescriptor = "24-year-old skinny female model with delicate bone structure, long legs, graceful posture, and elegant proportions. Face and body remain identical across all shots.";
  
  for (let i = 0; i < count; i++) {
    const seed = Math.floor(Math.random() * 100000);
    const hair_color = pick(sceneConfig.hair_color);
    const lip_color = pick(sceneConfig.lip_color);
    const colorTheme = input.colorTheme || pick(sceneConfig.colorThemes);
    const mood = pick(sceneConfig.mood);
    const outfit = input.Outfit || pick(outfitSets[sceneType]);
    const accessories = input.Accessories || pick(accessorySets[sceneType]);
    const background = input.background || pick(detailedBackgrounds[sceneType]);
    const texture = pick(backgroundTextures);
    const photographer = input.Photographers || pick(photographers);
    const camera = `${pick(cameraOptions)} at ${pick(cameraAngles)}`;
    const lighting = pick(lightingOptions);
    const pose = pick(poseOptions);
    const skin = pick(skinStyles);
  
    let prompt = `Ultra-realistic 4K ${sceneType} editorial photo of a model: ${bodyDescriptor}. `;
    prompt += `She has ${hair_color} hair and ${lip_color} lips. `;
    prompt += `She wears a ${outfit} in ${colorTheme} tones with ${accessories}, `;
    prompt += `striking a ${pose} in ${background} featuring ${texture}. `;
    prompt += `Her skin shows ${skin}. Lighting: ${lighting}. `;
    prompt += `Photographed in the style of ${photographer}. Shot using ${camera}. Mood: ${mood}. Seed: ${seed}.`;
  
    const cleanPrompt = sanitize(prompt);
  
    results.push({
      json: {
        prompt: cleanPrompt,
        sceneType,
        outfit,
        accessories,
        background,
        texture,
        camera,
        lighting,
        seed,
        bodyDescriptor,
        photographer,
        mood
      }
    });
  }
  
  return results;
  
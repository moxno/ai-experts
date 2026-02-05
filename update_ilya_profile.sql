-- Update Ilya Sibiryakov's profile with new bio
UPDATE "Expert"
SET 
  bio_he = 'מומחה לאורקסטרציה של מערכות בינה מלאכותית ולבניית פתרונות עסקיים מבוססי AI. בעל ניסיון מעשי בהטמעת מודלי שפה גדולים (LLMs) ואוטומציה של תהליכים עסקיים מורכבים.

מתמחה בפיתוח ויישום אסטרטגיות GEO (Generative Engine Optimization) לשיפור נראות מותגים ותוכן במנועי חיפוש מבוססי בינה מלאכותית ובמערכות כמו Google AI Overviews ומנועים גנרטיביים נוספים.

מלווה ארגונים ויזמים במינוף AI להאצת צמיחה, ייעול תהליכים ויצירת יתרון תחרותי מדיד.

יוצר ישויות טכנולוגיות מתקדמות המבוססות על Next.js, המותאמות לצרכים העסקיים של לקוחות, ומשלב בין מערכות AI, דאטה ותשתיות דיגיטליות ליצירת פתרונות יישומיים בקנה מידה ארגוני.',
  
  bio_en = 'Expert in AI systems orchestration and building AI-powered business solutions. Experienced in implementing Large Language Models (LLMs) and automating complex business processes.

Specializes in developing and implementing GEO (Generative Engine Optimization) strategies to improve brand and content visibility in AI-powered search engines and systems like Google AI Overviews and other generative engines.

Guides organizations and entrepreneurs in leveraging AI to accelerate growth, optimize processes, and create measurable competitive advantages.

Creates advanced technological entities based on Next.js, tailored to clients'' business needs, integrating AI systems, data, and digital infrastructure to deliver enterprise-scale practical solutions.',
  
  title_he = 'מומחה AI Orchestration ו-GEO',
  title_en = 'AI Orchestration & GEO Expert',
  
  updated_at = NOW()
WHERE slug = 'ilya-sibiryakov' OR name ILIKE '%ilya%sibiryakov%' OR name_he LIKE '%איליה%סיביריאקוב%';

-- Verify the update
SELECT id, slug, name, name_he, title_en, title_he, 
       LEFT(bio_en, 100) as bio_en_preview,
       LEFT(bio_he, 100) as bio_he_preview
FROM "Expert"
WHERE slug = 'ilya-sibiryakov' OR name ILIKE '%ilya%sibiryakov%' OR name_he LIKE '%איליה%סיביריאקוב%';

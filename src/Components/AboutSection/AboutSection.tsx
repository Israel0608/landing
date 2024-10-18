import React from 'react';
import ReactDOM from 'react-dom/client';
import './AboutSection.scss'
import logo from "../../Assets/images/logo-page.jpeg"

function AboutSection(): JSX.Element {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <header>
        <img src={logo} alt="Logo" style={{ width: '200px', height: '200px', display: 'block', padding: '20px' }} />
      </header>
      <h1>אחזקת דירות - למה זה חשוב?</h1>
      <p>
        אחזקת דירות היא תהליך מתמשך וחיוני לשמירה על ערך הנכס שלך ועל איכות החיים בו. נכס שאינו מתוחזק כראוי עלול לגרום לבעיות רבות כגון
        נזקים מבניים, בעיות בריאותיות, והוצאות בלתי צפויות לתיקונים. תחזוקה נכונה תסייע להימנע מבעיות אלו, להבטיח שהדירה תישאר
        במצב מצוין לאורך זמן, וכן לשמור על ערכה בשוק הנדל"ן.
      </p>

      <h2>מה כוללת תחזוקת דירות?</h2>
      <p>
        תחזוקת דירות כוללת מגוון רחב של שירותים, שכל אחד מהם תורם לשמירה על בטיחות, נוחות ואסתטיקה בדירה. אלו כוללים:
      </p>
      <ul>
        <li>
          <strong>תחזוקה שוטפת:</strong> תחזוקה שוטפת כוללת פעולות קטנות אך חשובות כמו בדיקת מערכות החשמל, תיקוני צבע וטיפול ברטיבות.
          תחזוקה כזו תסייע במניעת נזקים גדולים יותר בעתיד.
        </li>
        <li>
          <strong>תיקוני אינסטלציה:</strong> בעיות אינסטלציה כמו נזילות, סתימות והצפות הן מהבעיות הנפוצות ביותר בדירות. תחזוקה נכונה תסייע
          לזהות בעיות אלו בזמן ולפתור אותן לפני שהן מחמירות.
        </li>
        <li>
          <strong>שיפוצי פנים:</strong> שיפוצים חלקיים או מלאים של הדירה יכולים לשדרג משמעותית את איכות החיים בה ולהעלות את ערכה.
          שיפוצים כוללים החלפת ריצוף, שדרוג המטבח, שיפוץ חדרי האמבטיה ועוד.
        </li>
        <li>
          <strong>עבודות חשמל:</strong> מערכת החשמל היא אחת המערכות הקריטיות בכל דירה. תחזוקה שוטפת כוללת בדיקות תקופתיות,
          טיפול בתקלות והחלפת מערכות ישנות במערכות מודרניות ובטוחות יותר.
        </li>
        <li>
          <strong>תחזוקת גינה:</strong> אם הדירה כוללת מרפסת או גינה, חשוב לשמור עליה מטופחת. תחזוקת גינה כוללת גיזום, השקיה,
          טיפול במדשאות והדברה בעת הצורך.
        </li>
      </ul>

      <h2>היתרונות של אחזקת דירות מקצועית</h2>
      <p>
        פנייה לשירותי תחזוקה מקצועיים מבטיחה שהדירה שלך תטופל על ידי אנשי מקצוע מיומנים, עם ניסיון וידע בטיפול בבעיות נפוצות ולא צפויות.
        מעבר לכך, אנשי תחזוקה מקצועיים מביאים איתם ציוד מתקדם, חומרי גלם איכותיים ויכולים להציע פתרונות ארוכי טווח ולא זמניים.
      </p>

      <h2> - שירותים שאנו מציעים</h2>
      <ul>
        <li>תיקוני אינסטלציה ואיתור נזילות</li>
        <li>עבודות חשמל ושדרוג מערכות</li>
        <li>שיפוצים כלליים, כולל מטבחים וחדרי אמבטיה</li>
        <li>תחזוקה שוטפת וניקוי מרזבים</li>
        <li>תחזוקת גינות ומרפסות</li>
      </ul>

      <p>
        צוות המומחים שלנו זמין 24/7 לתת שירות מהיר, מקצועי ואמין. אם אתם מעוניינים להבטיח שהדירה שלכם תישאר במצב מצוין לאורך זמן,
        פנו אלינו עוד היום. נשמח לספק ייעוץ מקצועי, תיאום שירותי תחזוקה והצעת מחיר מותאמת אישית לצרכים שלכם.
      </p>

      <h2>?למה לבחור בנו</h2>
      <p>
        אנו מציעים ניסיון רב שנים בתחום תחזוקת הדירות, שירות לקוחות אדיב, ועבודה עם כלים וחומרים באיכות הגבוהה ביותר.
        בין אם אתם זקוקים לתחזוקה שוטפת או לשיפוצים נרחבים, אנחנו כאן כדי להעניק לכם שירות ברמה הגבוהה ביותר.
      </p>

      <p>
        שמרו על הנכס שלכם מתוחזק כראוי והימנעו מהפתעות לא נעימות. צרו קשר עוד היום לקבלת הצעת מחיר מותאמת אישית.
      </p>
    </div>
  );
};
export default AboutSection;
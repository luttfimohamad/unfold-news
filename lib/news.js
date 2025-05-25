// with sqlite3
// import sql from 'better-sqlite3';
// const db = sql('data.db');

// with dummy data
import { DUMMY_NEWS } from '@/dummy-news';

// with better-sqlite3
// export async function getAllNews() {
//   const news = db.prepare('SELECT * FROM news').all();
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   return news;
// }

// with dummy data
export function getAllNews() {
  // Simulating a database call with dummy data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DUMMY_NEWS);
    }, 2000);
  });
}

export async function getNewsItem(slug) {
  const newsItem = db.prepare('SELECT * FROM news WHERE slug = ?').get(slug);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return newsItem;
}

// with sqlite3
// export async function getLatestNews() {
//   const latestNews = db
//     .prepare('SELECT * FROM news ORDER BY date DESC LIMIT 3')
//     .all();
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   return latestNews;
// }

// with dummy data
export function getLatestNews() {
  return DUMMY_NEWS.slice(0, 3);
}

// with sqlite3
// export async function getAvailableNewsYears() {
//   const years = db
//     .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
//     .all()
//     .map((year) => year.year);

//   await new Promise((resolve) => setTimeout(resolve, 2000));

//   return years;
// }

// with dummy data
export function getAvailableNewsYears() {
  return DUMMY_NEWS.reduce((years, news) => {
    const year = new Date(news.date).getFullYear();
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort((a, b) => b - a);
}

// with sqlite3
// export function getAvailableNewsMonths(year) {
//   return db
//     .prepare(
//       "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
//     )
//     .all(year)
//     .map((month) => month.month);
// }

// with dummy data
export function getAvailableNewsMonths(year) {
  return DUMMY_NEWS.reduce((months, news) => {
    const newsYear = new Date(news.date).getFullYear();
    if (newsYear === +year) {
      const month = new Date(news.date).getMonth();
      if (!months.includes(month)) {
        months.push(month + 1);
      }
    }
    return months;
  }, []).sort((a, b) => a - b);
}

// with sqlite3
// export async function getNewsForYear(year) {
//   const news = db
//     .prepare(
//       "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
//     )
//     .all(year);

//   await new Promise((resolve) => setTimeout(resolve, 2000));

//   return news;
// }

// with dummy data
export function getNewsForYear(year) {
  return DUMMY_NEWS.filter(
    (news) => new Date(news.date).getFullYear() === +year
  );
}

// with sqlite3
// export async function getNewsForYearAndMonth(year, month) {
//   const news = db
//     .prepare(
//       "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
//     )
//     .all(year, month);

//   await new Promise((resolve) => setTimeout(resolve, 2000));

//   return news;
// }

// with dummy data
export function getNewsForYearAndMonth(year, month) {
  return DUMMY_NEWS.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}

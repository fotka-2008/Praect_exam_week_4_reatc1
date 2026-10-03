# ABC AUTO — сайт автосалона

Vite + React (JavaScript), Tailwind CSS, react-router-dom.

```bash
npm install
npm run dev     # http://localhost:5173
npm run build
npm run lint
```

## Структура

```
tailwind.config.js    цвета из макета, шрифт Roboto (подключается в src/index.css через @config)
public/images/        картинки
public/videos/        видео отзывов (review-1.mp4 … review-9.mp4)
src/
  App.jsx             роутер, избранное и сравнение (useState + localStorage)
  utils.js            формат цены, расчёт платежа, маска телефона, сортировка, фильтр
  components/         шапка, подвал, модалки, карточки, слайдеры, калькуляторы
  pages/              страницы
  data/               все данные в JSON
```

## Страницы

`/` — Госпрограмма Trade-in (главная), `/credit/express`, `/credit/installment`, `/credit/first-car`,
`/credit/family-car`, `/credit/medics`, `/special/recycling` — один компонент `Credit.jsx` + `creditPrograms.json`
(Trade-in — первая запись). Дальше: `/taxi`, `/taxi/:id`, `/new/:id` (и `/new/:id?trim=N`), `/used`, `/used/:id`,
`/insurance`, `/favorites`, `/reviews`, `/service`, `/about`. Логотип ведёт на `/`.

## Данные

- `cars.json` — все машины: `id`, `type` (`new` / `used` / `taxi`), `sold`, `image`, `hue` (поворот цвета).
- `reviews.json` — отзывы, поле `video` — путь к mp4 в `public/videos/`.
- `banks.json`, `insurance.json` — поле `logo`: имя картинки в `public/images/`. Пока пусто — показывается текстовый логотип.
- `benefits.json`, `creditPrograms.json`, `services.json`, `discounts.json`, `equipment.json`,
  `brands.json`, `menu.json`, `footerLinks.json`, `trust.json`, `blog.json`.
# Praect_exam_week_4_reatc1

# Вспомогательные материалы

Сброс стилей
https://webcademy.ru/blog/739/

Шрифты
https://fonts.google.com/

Конвертация шрифтов
https://webfont.yabe.land/en/misc/convert-ttf-woff2/

Слайдер Swiper
https://swiperjs.com/get-started

Генератор сниппетов для VS Code
https://snippet-generator.app/

Сжатие графики
https://tinypng.com/

## Сниппет под медиа запросы

**CSS код:**
```css
@media (max-width: 1199px) {

}

@media (max-width: 767px) {

}
```

**JSON код сниппета:**
```json
"Media query": {
	"prefix": "mdq",
	"scope": "css",
	"body": [
		"@media (max-width: 1199px) {",
		"	${1}",
		"}",
		"",
		"@media (max-width: 767px) {",
		"	${2}",
		"}",
	],
	"description": "Media query",
},
```

## Текст полукругом через SVG

```html
<svg class="header__round-text-svg" viewBox="0 0 1400 750" overflow="visible" role="img"
	aria-label="Where your pet is our priority">
	<defs>
		<path id="headerTextArc" d="M100 710 a600 600 0 0 1 1200 0" />
	</defs>
	<text class="header__round-text-path">
		<textPath href="#headerTextArc" startOffset="50%" text-anchor="middle">
			WHERE YOUR PET IS OUR PRIORITY
		</textPath>
	</text>
</svg>
```

# Стилизация swiper слайдера

```css

/*  Swiper */

.swiper-button-prev,
.swiper-button-next {
	@media (max-width: 1199px) {
		--swiper-navigation-top-offset: 107px;
	}
}

.swiper-button-next.swiper-button-disabled,
.swiper-button-prev.swiper-button-disabled {
	opacity: 1 !important;
	color: var(--333333) !important;

	@media (max-width: 767px) {
		display: none !important;
	}
}

.swiper-button-prev,
.swiper-rtl .swiper-button-next,
.swiper-button-next,
.swiper-rtl .swiper-button-prev {
	color: var(--efbd68) !important;

	@media (max-width: 767px) {
		display: none !important;
	}
}


.swiper-pagination {
	display: none;
	position: static !important;
	margin-top: 26px;

	@media (max-width: 767px) {
		display: block;
	}
}

.swiper-pagination-bullet {
	--swiper-pagination-bullet-size: 12px;

	--swiper-pagination-bullet-opacity: 1;
	--swiper-pagination-color: #edb24e;

	--swiper-pagination-bullet-inactive-opacity: 1;
	--swiper-pagination-bullet-inactive-color: #333333;

	width: 12px;
	height: 12px;
	background-color: #d9d9d9;
	opacity: 1;
}

.swiper-pagination-bullet-active {
	background-color: var(--efbd68);
}
```

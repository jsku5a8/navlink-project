import scss from "./Slider.module.scss";
import { useKeenSlider } from "keen-slider/react";

const sliderData = [
	{
		img: "https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Pitstsa_30sm/Po-taiski_30sm/Medium.png?hash=ae4a86b0d77b8cd38d5c1c870a66548e",
		title: "Детская 30см",
		text: "Пицца Детская. Пицца-соус, сыр моцарелла, сосиски, помидоры, кукуруза. БАЛДАР ?Ч?Н Пицца-соус, моцарелла сыры, сосиска, помидор, ж?г?р?. Children’s Pizza. Pizza sauce, mozzarella, sausages, tomatoes, corn.",
	},
	{
		img: "https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Pitstsa_30sm/Po-taiski_30sm/Medium.png?hash=ae4a86b0d77b8cd38d5c1c870a66548e",
		title: "По-тайски 30см",
		text: "Соус пад-тай, сыр моцарелла, куриное филе маринованное, грибы вёшeнки , лук маринованный, перчики халапеньо, кинза. ТАИЛАНД ПИЦЦАСЫ Пад-тай соусу, моцарелла сыры, маринаддалган тооктун т?ш эти, вёшeнки козу карындары, маринаддалган пияз, халапеньо калемпири, кинза Thai pizza Pad Thai sauce, Mozzarella, marinated chicken, oyster mushrooms, pickled onions, jalapeno peppers, cilantro.		",
	},
	{
		img: "https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v1/Pitstsa_30sm/Obzhorka_30sm/Medium.png?hash=f7cb500910fd30ed1c98bd37b27ba6af",
		title: "Обжорка 30см",
		text: "Пицца Обжорка. Пицца-соус, говяжий фарш, сыр моцарелла, помидоры, майонез, кетчуп, зелень, маринованные огурцы. Пицца-соус, тууралган уй эти, моцарелла сыры, помидор, пияз, майонез, кетчуп, ч?п-чарлар, маринаддалган бадыра? Objorka Pizza. Pizza sauce, mozzarella, minced beef, marinated cucumbers, tomatoes, mayonnaise, ketchup, greens.		",
	},
	{
		img: "https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v1/Pitstsa_30sm/Pepperoni_30sm/Medium.png?hash=21df342a79807048d67e34d64d9a0d1a",
		title: "Пепперони 30см",
		text: "Пицца-соус, сыр моцарелла, салями, шампиньоны. ПЕППЕРОНИ Пицца-соус, моцарелла сыры, салями, шампиньон Pepperoni Pizza. Pizza sauce, Mozzarella, salami, champignon mushrooms.",
	},
	{
		img: "https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Pitstsa_30sm/Gaskonskaia_30sm/Medium.png?hash=5ad10721beff448a1c86e59f30d3c2d9",
		title: "Гасконская 30см",
		text: "Пицца Гасконская. Пицца-соус, сыр моцарелла, копчёная курица, шампиньоны, болгарский перец, помидоры, кукуруза, майонез, зелень. Пицца-соус, моцарелла сыры, ышталган тоок, шампиньон, болгар калемпири, помидор, ж?г?р?, майонез, ч?п-чарлар. Gascon Pizza. Pizza sauce, mozzarella, smoked chicken, сhampignon mushrooms, bell peppers, tomatoes, corn, mayonnaise, parsley.		",
	},
	{
		img: "https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v1/Pitstsa_30sm/Margarita_30sm/Medium.png?hash=e7ac3d125c355e46ec2091677801f5eb",
		title: "Маргарита 30см",
		text: "Пицца-соус, сыр моцарелла, орегано, помидоры, базилик. МАРГАРИТА Пицца-соус, моцарелла сыры, орегано, помидор, райхан Margarita Pizza. Pizza sauce, mozzarella, oregano, tomatoes, basil.		",
	},
	{
		img: "https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v32/Pitstsa_30sm/Vegetarianskaia_30sm/Medium.png?hash=5696140c19c5358cc13389a0122876fd",
		title: "Вегетарианская 30см",
		text: "Пицца-соус, сыр «Моцарелла», помидоры, кукуруза, маслины, шампиньоны, болгарский перец, зелень, лук. ВЕГЕТЕРИАНДАР YЧYН Пицца-соус, моцарелла сыры, помидор, ж?г?р?, зайтун, шампиньон, болгар калемпири, ч?п-чарлар, пияз. Vegetarian Pizza sauce, Mozzarella, greens, onion, champignon mushrooms, bell pepper, tomatoes, olives, corn",
	},
	{
		img: "https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Pitstsa_30sm/Super_syir_30sm/Medium.png?hash=3174e2a6cf7d80914f8df2ace6c2a5c9",
		title: "Супер сыр 30см",
		text: "Пицца-соус, сыры: моцарелла, сулугуни, чечил, тильзитский. СУПЕР СЫР Пицца-соус, сырлар: моцарелла, сулугуни, чечил, тильзит. Pizza sauce with mozzarella, suluguni, chechil, tilzit.		",
	},
];

const Slider = () => {
	const [sliderRef] = useKeenSlider({
		breakpoints: {
			"(min-width: 400px)": {
				slides: { perView: 1, spacing: 5 },
			},
			"(min-width: 700px)": {
				slides: { perView: 2, spacing: 5 },
			},
			"(min-width: 1000px)": {
				slides: { perView: 3, spacing: 10 },
			},
		},
		slides: { perView: 1 },
	});

	return (
		<>
			<section className={scss.Slider}>
				<div className="container">
					<div className={scss.content}>
						<div ref={sliderRef} className="keen-slider">
							{sliderData.map((item, index) => (
								<div key={index} className="keen-slider__slide number-slide1">
									<img className={scss.boxer} src={item.img} alt={item.title} />
									<h3>{item.title}</h3>
									<h3>{item.text}</h3>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default Slider;

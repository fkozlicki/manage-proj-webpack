import React from "react";
// Styles
import { StyledTesimonials } from "./Testimonials.style";
import { Button } from "../../App.style";
// Testimonials data
import data from "./testimonialsData";
// Swiper
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
	return (
		<StyledTesimonials>
			<h1 className="title">What they've said</h1>

			<Swiper
				modules={[Pagination]}
				pagination={{ clickable: true }}
				breakpoints={{
					764: {
						slidesPerView: 2,
					},
					1024: {
						slidesPerView: 3,
					},
				}}
			>
				{data.map((tes) => (
					<SwiperSlide key={tes.name}>
						<div className="image-box">
							<img src={tes.avatar} alt={tes.name} />
						</div>
						<h1 className="name">{tes.name}</h1>
						<h1 className="description">{tes.description}</h1>
					</SwiperSlide>
				))}
			</Swiper>
			<Button primary shadow>
				Get Started
			</Button>
		</StyledTesimonials>
	);
};

export default Testimonials;

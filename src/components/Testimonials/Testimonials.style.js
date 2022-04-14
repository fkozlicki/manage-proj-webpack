import styled from "styled-components";

export const StyledTesimonials = styled.div`
	padding: 5rem 0;
	text-align: center;

	.title {
		margin-bottom: 4rem;
	}

	.swiper-slide {
		padding: 0 2.5rem;
	}
	.swiper {
		margin-bottom: 3rem;
		padding-bottom: 4rem;
	}

	.image-box {
		margin-bottom: 1.5rem;
		img {
			width: 70px;
		}
	}

	.name {
		font-size: 1rem;
		margin-bottom: 1rem;
	}
	.description {
		font-size: 0.9rem;
		font-weight: 400;
		color: var(--gray-blue);
		line-height: 2;
	}

	.swiper-pagination-bullet {
		background-color: transparent;
		opacity: 1;
		border: 1px solid var(--primary);

		&-active {
			background-color: var(--primary);
		}
	}
`;

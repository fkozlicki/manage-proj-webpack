import styled from "styled-components";

export const StyledAdvantage = styled.div`
	position: relative;
	overflow-x: hidden;

	.advantage__title-bar {
		position: absolute;
		width: 120%;
		top: 0;
		right: -20%;

		display: flex;
		align-items: center;
		gap: 1rem;

		background: var(--pale-red);
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
	}

	.advantage__number {
		padding: 0.575rem 1.6rem;
		color: white;
		font-weight: 700;
		border-radius: 20px;
		background: var(--primary);
	}

	.advantage__title {
		font-size: 0.95rem;
	}
	.advantage__description {
		font-size: 0.875rem;
		line-height: 2;
		color: var(--gray-blue);
		font-weight: 400;

		padding: 3rem 0;
	}
`;

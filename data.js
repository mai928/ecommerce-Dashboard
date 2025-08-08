import { Badge, Beef, Coffee, Home, Pizza } from "lucide-react";
import { useId } from "react";

export const downIcon = (fill) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill={fill}
		width={13}
		viewBox="0 0 448 512"
	>
		<path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
	</svg>
);

export const upIcon = (fill) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill={fill}
		width={13}
		viewBox="0 0 448 512"
	>
		<path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
	</svg>
);
export const translation = (fill) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={18}
		fill={fill}
		viewBox="0 0 512 512"
	>
		<path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z" />
	</svg>
);
export const billingIcon = (fill) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={15}
		fill={fill}
		viewBox="0 0 512 512"
	>
		<path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
	</svg>
);
export const tableIcon = (fill) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={15}
		fill={fill}
		viewBox="0 0 448 512"
	>
		<path d="M160 80c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-352zM0 272c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 272zM368 96l32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48z" />
	</svg>
);
export const homeIcon = (fill) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={16}
		fill={fill}
		viewBox="0 0 576 512"
	>
		<path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c.2 35.5-28.5 64.3-64 64.3l-320.4 0c-35.3 0-64-28.7-64-64l0-160.4-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24zM352 224a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-96 96c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80l-64 0z" />
	</svg>
);
export const profileIcon = (fill) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={15}
		fill={fill}
		viewBox="0 0 448 512"
	>
		<path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
	</svg>
);
export const settingsIcon = (fill) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={15}
		fill={fill}
		viewBox="0 0 512 512"
	>
		<path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
	</svg>
);
export const notificationIcon = (fill) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={15}
		fill={fill}
		viewBox="0 0 448 512"
	>
		<path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
	</svg>
);
export const searchIcon = (fill) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={15}
		fill={fill}
		viewBox="0 0 512 512"
	>
		<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
	</svg>
);
export const rightIcon = (fill) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={14}
		fill={fill}
		viewBox="0 0 512 512"
	>
		<path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
	</svg>
);
export const SmileyIcon = (fill) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 512 512"
		fill="currentColor"
		stroke="currentColor"
		strokeWidth="0"
		height="30px"
		width="30px"
		className="text-white"
	>
		<path d="M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM184 208a24 24 0 11-24 24 23.94 23.94 0 0124-24zm167.67 106.17c-12 40.3-50.2 69.83-95.62 69.83s-83.62-29.53-95.72-69.83a8 8 0 017.83-10.17h175.69a8 8 0 017.82 10.17zM328 256a24 24 0 1124-24 23.94 23.94 0 01-24 24z" />
	</svg>
);

export const keyIcon = (fill) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={15}
		fill={fill}
		viewBox="0 0 512 512"
	>
		<path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" />
	</svg>
);

export const settingDots = (fill) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill={fill}
		width={20}
		viewBox="0 0 448 512"
	>
		<path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
	</svg>
);

export const pagesIcon = (fill) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill={fill}
		width={15}
		viewBox="0 0 384 512"
	>
		<path d="M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z" />
	</svg>
);

export const ecommerceIcon = (fill) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill={fill}
		width={20}
		viewBox="0 0 576 512"
	>
		<path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
	</svg>
);

export const rotate = (fill) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill={fill}
		width={20}
		viewBox="0 0 640 640"
	>
		<path d="M545.7 304.1C528.1 302.9 512.8 316.1 511.5 333.8C508.2 380.8 487.9 423.2 456.7 454.8L425 423C418.1 416.1 407.8 414.1 398.8 417.8C389.8 421.5 384 430.3 384 440L384 552C384 565.3 394.7 576 408 576L520 576C529.7 576 538.5 570.2 542.2 561.2C545.9 552.2 543.9 541.9 537 535L502 500C543.7 457.8 570.9 401.2 575.4 338.2C576.6 320.6 563.4 305.3 545.7 304zM103 105L138 140C96.3 182.2 69.1 238.8 64.6 301.8C63.4 319.4 76.6 334.7 94.3 336C112 337.3 127.2 324 128.5 306.3C131.8 259.3 152.1 216.9 183.3 185.3L215 217C221.9 223.9 232.2 225.9 241.2 222.2C250.2 218.5 256 209.7 256 200L256 88C256 74.7 245.3 64 232 64L120 64C110.3 64 101.5 69.8 97.8 78.8C94.1 87.8 96.2 98.1 103 105zM304 94.3C302.8 111.9 316 127.2 333.7 128.5C380.7 131.8 423.1 152.1 454.7 183.3L423 215C416.1 221.9 414.1 232.2 417.8 241.2C421.5 250.2 430.3 256 440 256L552 256C565.3 256 576 245.3 576 232L576 120C576 110.3 570.2 101.5 561.2 97.8C552.2 94.1 541.9 96.2 535 103L500 138C457.8 96.3 401.2 69.1 338.2 64.6C320.6 63.4 305.3 76.6 304 94.3zM105 537L140 502C182.2 543.7 238.8 570.9 301.8 575.4C319.4 576.6 334.7 563.4 336 545.7C337.3 528 324 512.8 306.3 511.5C259.3 508.2 216.9 487.9 185.3 456.7L217 425C223.9 418.1 225.9 407.8 222.2 398.8C218.5 389.8 209.7 384 200 384L88 384C74.7 384 64 394.7 64 408L64 520C64 529.7 69.8 538.5 78.8 542.2C87.8 545.9 98.1 543.8 105 537z" />
	</svg>
);

export const circleUser = (fill) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill={fill}
		width={20}
		viewBox="0 0 640 640"
	>
		<path d="M463 448.2C440.9 409.8 399.4 384 352 384L288 384C240.6 384 199.1 409.8 177 448.2C212.2 487.4 263.2 512 320 512C376.8 512 427.8 487.3 463 448.2zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM320 336C359.8 336 392 303.8 392 264C392 224.2 359.8 192 320 192C280.2 192 248 224.2 248 264C248 303.8 280.2 336 320 336z" />
	</svg>
);

export const FullStar = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 576 512"
		width={16}
		fill="#facc15"
		className=" text-yellow-400"
	>
		<path
			d="M287.9 17.8L354 150.2l146.1 21.3c26.2 3.8 36.7 36 
      17.7 54.6L439 334.6l25 145.5c4.5 26.2-23.1 46-46.4 
      33.7L288 439.6l-130.6 74.2c-23.3 13.2-50.9-7.4-46.4-33.7l25-145.5L58.2 
      226.1c-19-18.6-8.5-50.8 17.7-54.6l146.1-21.3L287.9 17.8z"
		/>
	</svg>
);

export const HalfStar = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 576 512"
		width={16}
		className=" text-gray-400"
	>
		<defs>
			<linearGradient id="halfGradient">
				<stop offset="50%" stopColor="currentColor" />
				<stop offset="50%" stopColor="transparent" />
			</linearGradient>
		</defs>
		<path
			fill="url(#halfGradient)"
			stroke="currentColor"
			d="M287.9 17.8L354 150.2l146.1 21.3c26.2 3.8 36.7 36 
      17.7 54.6L439 334.6l25 145.5c4.5 26.2-23.1 46-46.4 
      33.7L288 439.6l-130.6 74.2c-23.3 13.2-50.9-7.4-46.4-33.7l25-145.5L58.2 
      226.1c-19-18.6-8.5-50.8 17.7-54.6l146.1-21.3L287.9 17.8z"
		/>
	</svg>
);

export const EmptyStar = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 576 512"
		width={16}
		fill="#9ca3af"
		stroke="currentColor"
	>
		<path
			d="M287.9 17.8L354 150.2l146.1 21.3c26.2 3.8 36.7 36 
      17.7 54.6L439 334.6l25 145.5c4.5 26.2-23.1 46-46.4 
      33.7L288 439.6l-130.6 74.2c-23.3 13.2-50.9-7.4-46.4-33.7l25-145.5L58.2 
      226.1c-19-18.6-8.5-50.8 17.7-54.6l146.1-21.3L287.9 17.8z"
		/>
	</svg>
);

export const logo = (
	<svg
		width="24"
		height="24"
		viewBox="0 0 22 22"
		fill="white"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M15.7509 0.0229001L16.0242 0.0507784L16.2945 0.089609L16.5617 0.139392L16.8248 0.199131L17.0839 0.268827L17.3399 0.348479L17.5908 0.438088L17.8366 0.537654L18.0783 0.645185L18.315 0.762672L18.5465 0.88912L18.7729 1.02353L18.9932 1.16691L19.2074 1.31825L19.4155 1.47755L19.6174 1.64383L19.8122 1.81807L20.0009 1.99928L20.1825 2.18845L20.3569 2.3836L20.5231 2.58572L20.6822 2.79381L20.8342 3.00787L20.977 3.22891L21.1116 3.45492L21.2381 3.68592L21.3554 3.92288L21.4635 4.16483L21.5624 4.41075L21.6522 4.66166L21.7318 4.91754L21.8011 5.17641L21.8613 5.44026L21.9113 5.7071L21.95 5.97791L21.9776 6.25172L21.9949 6.52851L22 6.8073V15.1987L21.9949 15.4775L21.9776 15.7533L21.95 16.0271L21.9113 16.2969L21.8613 16.5637L21.8011 16.8266L21.7318 17.0864L21.6522 17.3413L21.5624 17.5922L21.4635 17.8382L21.3554 18.0801L21.2381 18.3161L21.1116 18.5471L20.977 18.7731L20.8342 18.9931L20.6822 19.2072L20.5231 19.4163L20.3569 19.6174L20.1825 19.8125L20.0009 20.0017L19.8122 20.1829L19.6174 20.3572L19.4155 20.5234L19.2074 20.6827L18.9932 20.8341L18.7729 20.9765L18.5465 21.1119L18.315 21.2373L18.0783 21.3548L17.8366 21.4633L17.5908 21.5619L17.3399 21.6515L17.0839 21.7322L16.8248 21.8019L16.5617 21.8616L16.2945 21.9104L16.0242 21.9492L15.7509 21.9781L15.4734 21.995L15.194 22H6.80603L6.52657 21.995L6.25016 21.9781L5.9758 21.9492L5.70552 21.9104L5.43829 21.8616L5.17515 21.8019L4.91609 21.7312L4.6611 21.6515L4.4102 21.5619L4.16337 21.4633L3.92165 21.3548L3.68503 21.2373L3.4535 21.1119L3.22809 20.9765L3.00779 20.8341L2.7936 20.6827L2.58452 20.5234L2.38257 20.3562L2.18776 20.1819L1.99907 20.0007L1.81752 19.8115L1.64312 19.6164L1.47687 19.4143L1.31776 19.2062L1.16681 18.9921L1.02299 18.7721L0.888363 18.5461L0.762911 18.3141L0.645619 18.0781L0.537506 17.8362L0.437552 17.5892L0.348818 17.3383L0.268243 17.0835L0.198887 16.8236L0.138711 16.5597L0.0897543 16.2929L0.0509968 16.0221L0.0224386 15.7493L0.00611961 15.4725L0 15.1927V6.8073L0.00611961 6.52851L0.0224386 6.25172L0.0509968 5.97791L0.0897543 5.7071L0.138711 5.44026L0.198887 5.17641L0.268243 4.91754L0.348818 4.66166L0.437552 4.41075L0.537506 4.16483L0.645619 3.92288L0.762911 3.68592L0.888363 3.45492L1.02299 3.22891L1.16681 3.00787L1.31776 2.79381L1.47687 2.58572L1.64312 2.3836L1.81752 2.18845L1.99907 1.99928L2.18776 1.81807L2.38257 1.64383L2.58452 1.47755L2.7936 1.31825L3.00779 1.16691L3.22809 1.02353L3.4535 0.88912L3.68503 0.762672L3.92165 0.645185L4.16337 0.537654L4.4102 0.438088L4.6611 0.348479L4.91609 0.268827L5.17515 0.199131L5.43829 0.139392L5.70552 0.089609L5.9758 0.0507784L6.25016 0.0229001L6.52657 0.00597393L6.80603 0H15.194L15.4734 0.00597393L15.7509 0.0229001ZM10.0198 13.2522L9.88827 13.2611L9.75874 13.2751L9.63023 13.295L9.50375 13.3199L9.37932 13.3497L9.25693 13.3856L9.13658 13.4254L9.01827 13.4702L8.90199 13.52L8.78878 13.5748L8.67863 13.6335L8.57051 13.6962L8.46648 13.7639L8.36449 13.8356L8.26555 13.9113L8.1707 13.9909L8.07891 14.0736L7.99017 14.1612L7.90552 14.2508L7.82494 14.3444L7.74743 14.442L7.67501 14.5425L7.60566 14.6451L7.5414 14.7516L7.48122 14.8602L7.42615 14.9717L7.37515 15.0862L7.32925 15.2027L7.28846 15.3221L7.25276 15.4426L7.22216 15.5661L7.19666 15.6915L7.17626 15.818L7.16198 15.9474L7.1528 16.0768L7.14974 16.2093V16.2202H11.8476L11.9802 16.2172L12.1117 16.2083L12.2423 16.1943L12.3698 16.1744L12.4962 16.1495L12.6217 16.1197L12.7441 16.0838L12.8644 16.044L12.9817 15.9992L13.098 15.9494L13.2112 15.8946L13.3214 15.8359L13.4295 15.7732L13.5345 15.7055L13.6355 15.6338L13.7344 15.5581L13.8293 15.4785L13.9221 15.3958L14.0098 15.3092L14.0945 15.2186L14.1751 15.125L14.2526 15.0274L14.325 14.9269L14.3943 14.8243L14.4586 14.7178L14.5188 14.6092L14.5739 14.4977L14.6248 14.3832L14.6707 14.2667L14.7115 14.1473L14.7472 14.0268L14.7789 13.9033L14.8044 13.7779L14.8237 13.6514L14.838 13.523L14.8472 13.3926L14.8503 13.2601V13.2502H10.1524L10.0198 13.2522ZM7.14974 9.52643L7.1528 9.66084L7.16198 9.79327L7.17626 9.92469L7.19666 10.0541L7.22216 10.1816L7.25276 10.308L7.28948 10.4315L7.33027 10.553L7.37719 10.6714L7.42819 10.7879L7.48326 10.9024L7.54344 11.0129L7.60872 11.1215L7.67807 11.227L7.75151 11.3296L7.82902 11.4281L7.9096 11.5237L7.99527 11.6163L8.08401 11.7049L8.17682 11.7896L8.27269 11.8712L8.37163 11.9479L8.47362 12.0205L8.57867 12.0892L8.68781 12.154L8.79898 12.2147L8.91219 12.2695L9.02846 12.3202L9.1478 12.366L9.26815 12.4079L9.39156 12.4437L9.51701 12.4746L9.64451 12.4995L9.77302 12.5194L9.90357 12.5343L10.0362 12.5423L10.1698 12.5453H14.8941V12.5343L14.8911 12.3999L14.8829 12.2675L14.8676 12.136L14.8482 12.0066L14.8217 11.8792L14.7911 11.7527L14.7554 11.6293L14.7136 11.5078L14.6677 11.3893L14.6167 11.2728L14.5606 11.1583L14.5004 11.0478L14.4351 10.9393L14.3668 10.8337L14.2934 10.7322L14.2159 10.6326L14.1343 10.537L14.0496 10.4444L13.9609 10.3558L13.8681 10.2712L13.7722 10.1905L13.6733 10.1129L13.5702 10.0402L13.4652 9.97149L13.3571 9.90677L13.2459 9.84703L13.1317 9.79127L13.0154 9.7405L12.8971 9.6947L12.7757 9.65387L12.6523 9.61703L12.5268 9.58717L12.4004 9.56128L12.2708 9.54136L12.1403 9.52643L12.0087 9.51846L11.8751 9.51548H7.14974V9.52643ZM10.0198 5.83255L9.88827 5.84151L9.75874 5.85545L9.63023 5.87536L9.50375 5.90025L9.37932 5.93012L9.25693 5.96597L9.13658 6.00579L9.01827 6.0506L8.90199 6.10038L8.78878 6.15514L8.67863 6.21388L8.57051 6.27661L8.46648 6.34432L8.36449 6.416L8.26555 6.49167L8.1707 6.57133L8.07891 6.65396L7.99017 6.74158L7.90552 6.83119L7.82494 6.92578L7.74743 7.02236L7.67501 7.12292L7.60566 7.22547L7.5414 7.33201L7.48122 7.44053L7.42615 7.55205L7.37515 7.66655L7.32925 7.78304L7.28846 7.90252L7.25276 8.02299L7.22216 8.14645L7.19666 8.2719L7.17626 8.39835L7.16198 8.52779L7.1528 8.65722L7.14974 8.78964V8.8006H11.8476L11.9802 8.79761L12.1117 8.78865L12.2423 8.77471L12.3698 8.7548L12.4962 8.72991L12.6217 8.70004L12.7441 8.66419L12.8644 8.62437L12.9817 8.57956L13.098 8.52978L13.2112 8.47502L13.3214 8.41627L13.4295 8.35355L13.5345 8.28584L13.6355 8.21416L13.7344 8.13849L13.8293 8.05883L13.9221 7.97619L14.0098 7.88957L14.0945 7.79897L14.1751 7.70538L14.2526 7.6078L14.325 7.50724L14.3943 7.40469L14.4586 7.29815L14.5188 7.18963L14.5739 7.07811L14.6248 6.96361L14.6707 6.84712L14.7115 6.72764L14.7472 6.60717L14.7789 6.48371L14.8044 6.35825L14.8237 6.23181L14.838 6.10337L14.8472 5.97294L14.8503 5.84051V5.83056H10.1524L10.0198 5.83255Z" />
	</svg>
);

export const sidebarLinks = [
	// 1. Dashboard
	{
		label: "Dashboard",
		href: "/",
		icon: homeIcon,
		children: [
			{ label: "Home", href: "/" },
			{ label: "CRM", href: "/AdminDashboard/default/CRM" }, // Example icon
		],
	},

	// 2. Pages
	{
		label: "Pages",
		href: "/pages",
		icon: pagesIcon,
		children: [
			{ label: "Profile", href: "/AdminDashboard/pages/profile" },
			{
				label: "Users",
				href: "/AdminDashboard/pages/users",
				children: [
					{ label: "Reports", href: "/AdminDashboard/pages/users/reports" },
					{ label: "New User", href: "/AdminDashboard/pages/users/newUser" },
				],
			},
			{
				label: "Account",
				href: "/pages/account",
				children: [
					{
						label: "Billing",
						href: "/AdminDashboard/pages/accounts/billing",
					},
					{
						label: "Invoice",
						href: "/AdminDashboard/pages/accounts/invoice",
					},
					{
						label: "Settings",
						href: "/AdminDashboard/pages/accounts/settings",
					},
				],
			},
		],
	},

	// 3. Authentication
	{
		label: "Authentication",
		href: "/auth",
		icon: keyIcon,
		children: [
			// Note: Use absolute paths for sign-in/sign-up if they are not nested
			{ label: "Sign In", href: "/AdminDashboard/sign-in" },
			{ label: "Sign Up", href: "/AdminDashboard/sign-up" },
		],
	},

	// 4. Ecommerce
	{
		label: "Ecommerce",
		href: "/ecommerce",
		icon: ecommerceIcon,
		children: [
			{ label: "Products", href: "/AdminDashboard/ecommerce/products" },
			{ label: "Orders", href: "/AdminDashboard/ecommerce/orders" },
		],
	},

	// 5. Translations
	{
		label: "Translations",
		href: "/translations",
		icon: translation,
		children: [
			{ label: "English", href: "/AdminDashboard/translations/en" },
			{ label: "Arabic", href: "/AdminDashboard/translations/ar" },
		],
	},
];

export const infoCurrentDayIcons = [
	{
		// id: 1,
		// title: "today's money",
		// rate: "+55%",
		// caseName: "$53,000",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={18}
				fill="white"
				viewBox="0 0 512 512"
			>
				<path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
			</svg>
		),
	},
	{
		// id: 2,
		// title: "today's users",
		// rate: "+3%",
		// caseName: "2,300",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={18}
				fill="white"
				viewBox="0 0 512 512"
			>
				<path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z" />
			</svg>
		),
	},
	{
		// id: 3,
		// title: "new clients",
		// rate: "-2%",
		// caseName: "+3,462",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={18}
				fill="white"
				viewBox="0 0 384 512"
			>
				<path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z" />
			</svg>
		),
	},
	{
		// id: 4,
		// title: "total sales",
		// rate: "+5%",
		// caseName: "$103,430",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={18}
				fill="white"
				viewBox="0 0 576 512"
			>
				<path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
			</svg>
		),
	},
];

export const tableData = [
	{
		id: 1,
		name: "Chakra Vision UI Version",
		companyIcon: { type: "xd" },
		members: [
			{
				name: "John Doe",
				image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
			},
			{
				name: "Jane Smith",
				image: "https://i.pravatar.cc/150?u=a042581f4e29026705d",
			},
			{
				name: "Sam Wilson",
				image: "https://i.pravatar.cc/150?u=a042581f4e29026706d",
			},
		],
		budget: 14000,
		completion: 60,
	},
	{
		id: 2,
		name: "Add Progress Track",
		companyIcon: { type: "jira" },
		members: [
			{
				name: "Elena Garcia",
				image: "https://i.pravatar.cc/150?u=a042581f4e29026707d",
			},
			{
				name: "Ryan Tompson",
				image: "https://i.pravatar.cc/150?u=a042581f4e29026708d",
			},
		],
		budget: 3000,
		completion: 10,
	},
	{
		id: 3,
		name: "Fix Platform Errors",
		companyIcon: { type: "slack" },
		members: [
			{
				name: "Michael Brown",
				image: "https://i.pravatar.cc/150?u=a042581f4e29026709d",
			},
			{
				name: "Emily White",
				image: "https://i.pravatar.cc/150?u=a042581f4e29026710d",
			},
		],
		budget: null, // "Not set"
		completion: 100,
	},
	{
		id: 4,
		name: "Launch our Mobile App",
		companyIcon: { type: "spotify" },
		members: [
			{
				name: "David Lee",
				image: "https://i.pravatar.cc/150?u=a042581f4e29026711d",
			},
			{
				name: "Sophia Martinez",
				image: "https://i.pravatar.cc/150?u=a042581f4e29026712d",
			},
			{
				name: "James Johnson",
				image: "https://i.pravatar.cc/150?u=a042581f4e29026713d",
			},
		],
		budget: 20500,
		completion: 100,
	},
	{
		id: 5,
		name: "Add the New Pricing Page",
		companyIcon: { type: "xd" }, // Using a different icon in the original, but reusing for simplicity
		members: [
			{
				name: "Ryan Tompson",
				image: "https://i.pravatar.cc/150?u=a042581f4e29026708d",
			},
		],
		budget: 500,
		completion: 25,
	},
	{
		id: 6,
		name: "Redesign New Online Shop",
		companyIcon: { type: "invision" },
		members: [
			{
				name: "Chris Green",
				image: "https://i.pravatar.cc/150?u=a042581f4e29026714d",
			},
			{
				name: "Patricia Hall",
				image: "https://i.pravatar.cc/150?u=a042581f4e29026715d",
			},
		],
		budget: 2000,
		completion: 40,
	},
];

export const ordersData = [
	{
		id: "1",
		iconType: "bell",
		iconColor: "text-blue-400",
		title: "$2400, Design changes",
		timestamp: "22 DEC 7:20 PM",
	},
	{
		id: "2",
		iconType: "code", // Using a code icon as a substitute for the custom one
		iconColor: "text-red-500",
		title: "New order #1832412",
		timestamp: "21 DEC 11 PM",
	},
	{
		id: "3",
		iconType: "cart",
		iconColor: "text-sky-400",
		title: "Server payments for April",
		timestamp: "21 DEC 9:34 PM",
	},
	{
		id: "4",
		iconType: "card",
		iconColor: "text-orange-400",
		title: "New card added for order #4395133",
		timestamp: "20 DEC 2:20 AM",
	},
	{
		id: "5",
		iconType: "sparkles", // Using sparkles for the custom logo
		iconColor: "text-purple-400",
		title: "New card added for order #4395133",
		timestamp: "18 DEC 4:54 AM",
	},
	{
		id: "6",
		iconType: "xd",
		iconColor: "text-pink-500",
		title: "New order #9583120",
		timestamp: "17 DEC",
	},
];

// E-Commerce
export const bannerLinks = [
	{
		label: "About Us",
		path: "/Store/about-us",
	},
	{
		label: "Compare",
		path: "/Store/compare",
	},
	{
		label: "Wishlist",
		path: "/Store/wishlist",
	},
];

export const categories_menu = [
  { id: 1, name: "Beauty", slug: "beauty" },
  { id: 2, name: "Fragrances", slug: "fragrances" },
  { id: 3, name: "Furniture", slug: "furniture" },
  { id: 4, name: "Groceries", slug: "groceries" },
  { id: 5, name: "Home Decoration", slug: "home-decoration" },
  { id: 6, name: "Kitchen Accessories", slug: "kitchen-accessories" },
  { id: 7, name: "Laptops", slug: "laptops" },
  { id: 8, name: "Mens Shirts", slug: "mens-shirts" },
  { id: 9, name: "Mens Shoes", slug: "mens-shoes" },
  { id: 10, name: "Mens Watches", slug: "mens-watches" },
  { id: 11, name: "Mobile Accessories", slug: "mobile-accessories" },
  { id: 12, name: "Motorcycle", slug: "motorcycle" },
  { id: 13, name: "Skin Care", slug: "skin-care" },
  { id: 14, name: "Smartphones", slug: "smartphones" },
  { id: 15, name: "Sports Accessories", slug: "sports-accessories" },
  { id: 16, name: "Sunglasses", slug: "sunglasses" },
  { id: 17, name: "Tablets", slug: "tablets" },
  { id: 18, name: "Tops", slug: "tops" },
 { id: 19, name: "Vehicle", slug: "vehicle" },
  { id: 20, name: "Womens Bags", slug: "womens-bags" },
  { id: 21, name: "Womens Dresses", slug: "womens-dresses" },
  { id: 22, name: "Womens Jewellery", slug: "womens-jewellery" },
  { id: 23, name: "Womens Shoes", slug: "womens-shoes" },
  { id: 24, name: "Womens Watches", slug: "womens-watches" }];


export const E_NavLinks = [
	{
		label: "Home",
		path: "/Store",
	},
	{
		label: "Shop",
		path: "/Store/shop",
	},
	{
		label: "meats & seafood",
		path: "/Store/meats&seafood",
		icon: <Beef color="#9ea1ac" />,
	},
	{
		label: "Bakery",
		path: "/Store/bakery",
		icon: <Pizza color="#9ea1ac" />,
	},
	{
		label: "Beverages",
		path: "/Store/beverages",
		icon: <Coffee color="#9ea1ac" />,
	},
	{
		label: "Blog",
		path: "/Store/blog",
	},
	{
		label: "Contact",
		path: "/Store/contact",
	},
];
export const E_Slider = [
	{
		label: "Home Made Dish On Your Doorstep",
		title: "Great Dish @ Great Price ",
		discount: "10 - 50% OFF",
		btnText: "Shop Now",
		slide: "/basket/slide1.jpg",
	},

	{
		label: "Exclusive Offer",
		title: "Specialist in the Grocery Store",
		discount: "from $7.99",
		btnText: "Shop Now",
		slide: "/basket/slide3.webp",
	},
	{
		label: "Exclusive Offer",
		title: "Specialist in the Grocery Store",
		discount: "from $7.99",
		btnText: "Shop Now",
		slide: "/basket/slide4.webp",
	},
	{
		label: "Exclusive Offer",
		title: "Specialist in the Grocery Store",
		discount: "from $7.99",
		btnText: "Shop Now",
		slide: "/basket/slide5.webp",
	},
	{
		label: "Exclusive Offer",
		title: "Specialist in the Grocery Store",
		discount: "from $7.99",
		btnText: "Shop Now",
		slide: "/basket/slide6.webp",
	},
];

export const E_Catagories = [
	{
		img: "/basket/bg/snacks.png",
		label: "Biscuits & Snacks",
		numberOfItems: "5 Items",
		width: "w-32",
	},
	{
		img: "/basket/bg/bread.png",
		label: "Breads & Bakery",
		numberOfItems: "5 Items",

		width: "w-36",
	},
	{
		img: "/basket/bg/breakfast.png",
		label: "Breakfast & Dairy",
		numberOfItems: "5 Items",
	},
	{
		img: "/basket/bg/frozen.png",
		label: "Frozen Foods",
		numberOfItems: "5 Items",
	},
	{
		img: "/basket/bg/drinks.png",
		label: "Beverages",
		numberOfItems: "5 Items",
	},
	{
		img: "/basket/bg/vegetables.png",
		label: "Fruits & Vegetables",
		numberOfItems: "5 Items",
	},
	{
		img: "/basket/bg/grocery.png",
		label: "Grocery & Staples",
		numberOfItems: "5 Items",
	},
	{
		img: "/basket/bg/houseNeed.png",
		label: "Household Needs",
		numberOfItems: "5 Items",
	},
	{
		img: "/basket/bg/meat.png",
		label: "Meats & Seafood",
		numberOfItems: "5 Items",
	},

	{
		img: "/basket/bg/seeds.png",
		label: "Herbs & spices",
		numberOfItems: "5 Items",
	},
];

export const E_CollectionFood = [
	{
		img: "/basket/gal9.jpg",
		label: "Vegetables",
		title: "Tangy Veggie wrap",
	},

	{
		img: "/basket/gal7.jpg",
		label: "Density To Taste",
		title: "Riso Tonnato",
	},
	{
		img: "/basket/gal2.jpg",
		label: "Amazing Taste",
		title: "Anguilla Marinata",
	},

	{
		img: "/basket/gal6.jpg",
		label: "Tapas",
		title: "Spanish Dinner",
	},
	{
		img: "/basket/gal3.jpg",
		label: "Pan Pizza",
		title: "Italian Pizza",
	},

	{
		img: "/basket/gal5.jpg",
		label: "Carbonara",
		title: "Relax & Enjoy",
	},
	{
		img: "/basket/gal4.jpg",
		label: "Tomato Flavor",
		title: "Spaghetti",
	},

	{
		img: "/basket/gal8.jpg",
		label: "Italian Special",
		title: "Canederli",
	},
];

export const E_WeekDeals = [
	{
		id: crypto.randomUUID(),
		img: "/basket/Perfums/perfum9.png",
		label: "Vegetables",
		title: "Chanel Coco Noir Eau De",
		stock: "IN STOCK",
		rate: 4.5,
		offer: "16.5%",
		price: "1050$",
		discount: "200$",
	},

	{
		id: crypto.randomUUID(),

		img: "/basket/Perfums/perfum7.png",
		label: "Density To Taste",
		title: "Dior J'adore",
		stock: "LOW STOCK",
		rate: 3.8,
		offer: "14.6%",
		price: "1050$",
		discount: "200$",
	},
	{
		id: crypto.randomUUID(),

		img: "/basket/Perfums/perfum8.png",
		label: "Amazing Taste",
		title: "Dolce Shine Eau de",
		stock: "IN STOCK",
		rate: 4,
		offer: "0.5%",
		price: "1050$",
		discount: "200$",
	},

	{
		id: crypto.randomUUID(),

		img: "/basket/Perfums/perfum6.png",
		label: "Tapas",
		title: "Gucci Bloom Eau de",
		stock: "IN STOCK",
		rate: 5,
		offer: "2.5%",
		price: "1050$",
		discount: "200$",
	},
	{
		id: crypto.randomUUID(),

		img: "/basket/bed1.png",
		label: "Pan Pizza",
		title: "Annibale Colombo Bed",
		stock: "IN STOCK",
		rate: 3,
		offer: "20%",
		price: "1050$",
		discount: "200$",
	},

	{
		id: crypto.randomUUID(),

		img: "/basket/bed2.png",
		label: "Carbonara",
		title: "Annibale Colombo Bed",
		stock: "LOW STOCK",
		rate: 2.8,
		offer: "15%",
		price: "1050$",
		discount: "200$",
	},
	{
		id: crypto.randomUUID(),

		img: "/basket/bed3.png",
		label: "Tomato Flavor",
		title: "Annibale Colombo Bed",
		stock: "LOW STOCK",
		rate: 4.6,
		offer: "10.5%",
		price: "1050$",
		discount: "200$",
	},
	{
		id: crypto.randomUUID(),
		img: "/basket/caution2.png",
		label: "Tomato Flavor",
		title: "Annibale Colombo Bed",
		stock: "LOW STOCK",
		rate: 4.5,
		offer: "10.5%",
		price: "1050$",
		discount: "200$",
	},
	{
		id: crypto.randomUUID(),

		img: "/basket/caution.png",
		label: "Tomato Flavor",
		title: "Annibale Colombo Bed",
		stock: "LOW STOCK",
		rate: 3.5,
		offer: "10.5%",
		price: "1050$",
		discount: "200$",
	},

	// {
	// 	img: "/basket/Perfums/perfum8.jpg",
	// 	label: "Italian Special",
	// 	title: "Canederli",
	// },

	// {
	// 	img: "/basket/Perfums/perfum9.jpg",
	// 	label: "Italian Special",
	// 	title: "Canederli",
	// },

	// {
	// 	img: "/basket/Perfums/perfum10.jpg",
	// 	label: "Italian Special",
	// 	title: "Canederli",
	// },

	// {
	// 	img: "/basket/Perfums/perfum11.jpg",
	// 	label: "Italian Special",
	// 	title: "Canederli",
	// },

	// {
	// 	img: "/basket/Perfums/perfum12.jpg",
	// 	label: "Italian Special",
	// 	title: "Canederli",
	// },
];

export const  E_HotDeal = [
	{
		id: crypto.randomUUID(),
		img: "/basket/Perfums/perfum9.png",
		label: "Vegetables",
		title: "Chanel Coco Noir Eau De",
		stock: "IN STOCK",
		rate: 4.5,
		offer: "16.5%",
		price: "1050$",
		discount: "200$",
	},

	{
		id: crypto.randomUUID(),

		img: "/basket/Perfums/perfum7.png",
		label: "Density To Taste",
		title: "Dior J'adore",
		stock: "LOW STOCK",
		rate: 3.8,
		offer: "14.6%",
		price: "1050$",
		discount: "200$",
	},
	{
		id: crypto.randomUUID(),

		img: "/basket/Perfums/perfum8.png",
		label: "Amazing Taste",
		title: "Dolce Shine Eau de",
		stock: "IN STOCK",
		rate: 4,
		offer: "0.5%",
		price: "1050$",
		discount: "200$",
	},

	{
		id: crypto.randomUUID(),

		img: "/basket/Perfums/perfum6.png",
		label: "Tapas",
		title: "Gucci Bloom Eau de",
		stock: "IN STOCK",
		rate: 5,
		offer: "2.5%",
		price: "1050$",
		discount: "200$",
	},
	{
		id: crypto.randomUUID(),

		img: "/basket/bed1.png",
		label: "Pan Pizza",
		title: "Annibale Colombo Bed",
		stock: "IN STOCK",
		rate: 3,
		offer: "20%",
		price: "1050$",
		discount: "200$",
	},

	{
		id: crypto.randomUUID(),

		img: "/basket/bed2.png",
		label: "Carbonara",
		title: "Annibale Colombo Bed",
		stock: "LOW STOCK",
		rate: 2.8,
		offer: "15%",
		price: "1050$",
		discount: "200$",
	},
	{
		id: crypto.randomUUID(),

		img: "/basket/bed3.png",
		label: "Tomato Flavor",
		title: "Annibale Colombo Bed",
		stock: "LOW STOCK",
		rate: 4.6,
		offer: "10.5%",
		price: "1050$",
		discount: "200$",
	},
	{
		id: crypto.randomUUID(),
		img: "/basket/caution2.png",
		label: "Tomato Flavor",
		title: "Annibale Colombo Bed",
		stock: "LOW STOCK",
		rate: 4.5,
		offer: "10.5%",
		price: "1050$",
		discount: "200$",
	},
	{
		id: crypto.randomUUID(),

		img: "/basket/caution.png",
		label: "Tomato Flavor",
		title: "Annibale Colombo Bed",
		stock: "LOW STOCK",
		rate: 3.5,
		offer: "10.5%",
		price: "1050$",
		discount: "200$",
	},

	// {
	// 	img: "/basket/Perfums/perfum8.jpg",
	// 	label: "Italian Special",
	// 	title: "Canederli",
	// },

	// {
	// 	img: "/basket/Perfums/perfum9.jpg",
	// 	label: "Italian Special",
	// 	title: "Canederli",
	// },

	// {
	// 	img: "/basket/Perfums/perfum10.jpg",
	// 	label: "Italian Special",
	// 	title: "Canederli",
	// },

	// {
	// 	img: "/basket/Perfums/perfum11.jpg",
	// 	label: "Italian Special",
	// 	title: "Canederli",
	// },

	// {
	// 	img: "/basket/Perfums/perfum12.jpg",
	// 	label: "Italian Special",
	// 	title: "Canederli",
	// },
];
export const E_CardDiscount =[
	{
		img:'/basket/bg/offer1.png',
		label:'Weekend Discount 40%',
		Title:'Organic Eggs',
		slugon:'Eat one every day'
	},
		{
		img:'/basket/bg/offer2.png',
		label:'Weekend Discount 40%',
		Title:'Organic Eggs',
		slugon:'Eat one every day'
	},
		{
		img:'/basket/bg/offer3.png',
		label:'Weekend Discount 40%',
		Title:'Organic Eggs',
		slugon:'Eat one every day'
	}
]

export const E_LocalBanner =[
	{
		img:'/basket/bg/local1.png'
	},
	{
		img:'/basket/bg/local2.png'
	},
	{
		img:'/basket/bg/local3.png'
	},
	{
		img:'/basket/bg/local1.png'
	},
	{
		img:'/basket/bg/local2.png'
	},
	{
		img:'/basket/bg/local3.png'
	},
]

export const paymentMethods = [
  {
    name: "Visa",
    icon: (
      <svg
        className="icon icon--full-color"
        viewBox="0 0 38 24"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        width="50"
        height="30"
        aria-labelledby="pi-visa"
      >
        <title id="pi-visa">Visa</title>
        <path
          opacity=".07"
          d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
        />
        <path
          fill="#fff"
          d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
        />
        <path
          d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z"
          fill="#142688"
        />
      </svg>
    ),
  },
  {
    name: "Mastercard",
    icon: (
      <svg
        className="icon icon--full-color"
        viewBox="0 0 38 24"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        width="50"
        height="30"
        aria-labelledby="pi-master"
      >
        <title id="pi-master">Mastercard</title>
        <path
          opacity=".07"
          d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
        />
        <path
          fill="#fff"
          d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
        />
        <circle fill="#EB001B" cx="15" cy="12" r="7" />
        <circle fill="#F79E1B" cx="23" cy="12" r="7" />
        <path
          fill="#FF5F00"
          d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"
        />
      </svg>
    ),
  },
  {
    name: "PayPal",
    icon: (
      <svg
        className="icon icon--full-color"
        viewBox="0 0 38 24"
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="30"
        role="img"
        aria-labelledby="pi-paypal"
      >
        <title id="pi-paypal">PayPal</title>
        <path
          opacity=".07"
          d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
        />
        <path
          fill="#fff"
          d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
        />
        <path
          fill="#003087"
          d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"
        />
        <path
          fill="#3086C8"
          d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"
        />
        <path
          fill="#012169"
          d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"
        />
      </svg>
    ),
  },
];

export const categoriesFooter = [
  {
    title: "Fruit & Vegetables",
    items: [
      { name: "Fresh Vegetables", path: "/fruit-vegetables/fresh-vegetables" },
      { name: "Herbs & Seasonings", path: "/fruit-vegetables/herbs-seasonings" },
      { name: "Fresh Fruits", path: "/fruit-vegetables/fresh-fruits" },
      { name: "Cuts & Sprouts", path: "/fruit-vegetables/cuts-sprouts" },
      { name: "Exotic Fruits & Veggies", path: "/fruit-vegetables/exotic-fruits-veggies" },
      { name: "Packaged Produce", path: "/fruit-vegetables/packaged-produce" },
      { name: "Party Trays", path: "/fruit-vegetables/party-trays" }
    ]
  },
  {
    title: "Breakfast & Dairy",
    items: [
      { name: "Milk & Flavoured Milk", path: "/breakfast-dairy/milk-flavoured-milk" },
      { name: "Butter and Margarine", path: "/breakfast-dairy/butter-and-margarine" },
      { name: "Cheese", path: "/breakfast-dairy/cheese" },
      { name: "Eggs Substitutes", path: "/breakfast-dairy/eggs-substitutes" },
      { name: "Honey", path: "/breakfast-dairy/honey" },
      { name: "Marmalades", path: "/breakfast-dairy/marmalades" },
      { name: "Sour Cream and Dips", path: "/breakfast-dairy/sour-cream-dips" },
      { name: "Yogurt", path: "/breakfast-dairy/yogurt" }
    ]
  },
  {
    title: "Meat & Seafood",
    items: [
      { name: "Breakfast Sausage", path: "/meat-seafood/breakfast-sausage" },
      { name: "Breakfast Sausage", path: "/meat-seafood/breakfast-sausage" }, // duplicate in original
      { name: "Dinner Sausage", path: "/meat-seafood/dinner-sausage" },
      { name: "Beef", path: "/meat-seafood/beef" },
      { name: "Chicken", path: "/meat-seafood/chicken" },
      { name: "Sliced Deli Meat", path: "/meat-seafood/sliced-deli-meat" },
      { name: "Shrimp", path: "/meat-seafood/shrimp" },
      { name: "Wild Caught Fillets", path: "/meat-seafood/wild-caught-fillets" },
      { name: "Crab and Shellfish", path: "/meat-seafood/crab-shellfish" },
      { name: "Farm Raised Fillets", path: "/meat-seafood/farm-raised-fillets" }
    ]
  },
  {
    title: "Beverages",
    items: [
      { name: "Sparkling Water", path: "/beverages/sparkling-water" },
      { name: "Soda & Pop", path: "/beverages/soda-pop" },
      { name: "Coffee", path: "/beverages/coffee" },
      { name: "Milk & Plant-Based Milk", path: "/beverages/milk-plant-based-milk" },
      { name: "Tea & Kombucha", path: "/beverages/tea-kombucha" },
      { name: "Drink Boxes & Pouches", path: "/beverages/drink-boxes-pouches" },
      { name: "Craft Beer", path: "/beverages/craft-beer" },
      { name: "Wine", path: "/beverages/wine" }
    ]
  },
  {
    title: "Breads & Bakery",
    items: [
      { name: "Milk & Flavoured Milk", path: "/breads-bakery/milk-flavoured-milk" },
      { name: "Butter and Margarine", path: "/breads-bakery/butter-and-margarine" },
      { name: "Eggs Substitutes", path: "/breads-bakery/eggs-substitutes" },
      { name: "Honey", path: "/breads-bakery/honey" },
      { name: "Marmalades", path: "/breads-bakery/marmalades" },
      { name: "Sour Cream and Dips", path: "/breads-bakery/sour-cream-dips" },
      { name: "Yogurt", path: "/breads-bakery/yogurt" }
    ]
  }
];








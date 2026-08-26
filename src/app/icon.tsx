import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
	const imageData = readFileSync(join(process.cwd(), "public", "aklogo.png"));
	const base64Image = `data:image/png;base64,${imageData.toString("base64")}`;

	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
				}}
			>
				<img
					src={base64Image}
					width={size.width}
					height={size.height}
					style={{ objectFit: "cover", borderRadius: "50%", filter: "invert(1)" }}
				/>
			</div>
		),
		{ ...size },
	);
}

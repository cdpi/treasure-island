
import { create as createPirate } from "./pirate.js";
import { create as createTreasure } from "./treasure.js";
import { create as createIsland } from "./island.js";

class TreasureIsland
	{
	public constructor()
		{
		createPirate();
		createTreasure();
		createIsland();
		}

	/*
	private init():void
		{
		const svg:string = new World().create(window.innerWidth, window.innerHeight).outerHTML;

		document.body.innerHTML = svg;

		//document.addEventListener("keypress", (event:KeyboardEvent) =>
		document.addEventListener("keydown", (event:KeyboardEvent) =>
			{
			console.log(event.key);
			});
		}
	*/
	}

export
	{
	TreasureIsland
	};

/*
document.querySelector("#light-theme").addEventListener("click", () => setActiveStyleSheet("Clair"));
document.querySelector("#dark-theme").addEventListener("click", () => setActiveStyleSheet("Sombre"));

document.querySelector("#howto-water-color").addEventListener("click", () =>
	{
	document.querySelectorAll("svg").forEach(svg =>
		{
		svg.classList.toggle("aaa");
		});
	});
*/

/*
const Island =
	{
	numberOfPoints: 16,
	tension: 0.2,
	Filter:
		{
		name: "islandFilter",
		Morphology: {radius: 15},
		Turbulence: {baseFrequency: 0.03, numOctaves: 4},
		DisplacementMap: {scale: 50}
		}
	};
*/

/*
	public island(size:number):SVGPathElement
		{
		const polygon:Polygon = new Polygon(Island.numberOfPoints);

		//const radius:number = Math.floor(size * 0.75);
		//const minimum:number = Math.floor(size * 0.6);
		//const maximum:number = Math.floor(size * 0.9);

		const radius:number = Math.floor(size * 0.85);
		const minimum:number = Math.floor(size * 0.7);
		const maximum:number = Math.floor(size * 0.95);

		const points:Array<IPoint2D> = polygon.getVertices(size, size, radius, getRandomRadiusModifier(minimum, maximum));

		const path:string = Path.getCurvedPathFromPoints(points, Island.tension).toString();

		return svgElement<SVGPathElement>("path", {d: path, fill: "var(--island-color)", filter: `url(#${Island.Filter.name})`});
		}

	public create(width:number, height:number):SVGSVGElement
		{
		const size:number = Math.floor(Math.min(width, height) / 2);

		const attributes:Attributes =
			{
			viewBox: `0 0 ${width} ${height}`
			};

		const svg:SVGSVGElement = svgElement<SVGSVGElement>("svg", attributes);

		svg.appendChild(this.filter());

		svg.appendChild(this.water());

		const island:SVGPathElement = this.island(size);

		svg.appendChild(island);

		//this.dots(svg, island, width, height);
		this.polygons(svg, island, width, height);

		return svg;
		}

	private dots(svg:SVGSVGElement, island:SVGPathElement, width:number, height:number):void
		{
		for (let x = 0; x < width; x += 20)
			{
			for (let y = 0; y < height; y += 20)
				{
				if (island.isPointInFill(new DOMPoint(x, y)))
					{
					svg.appendChild(svgElement<SVGCircleElement>("circle", {cx: x, cy: y, r: 3, fill: "var(--island-dot)"}));
					}

				//const fill:string = island.isPointInFill(new DOMPoint(x, y)) ? "red" : "gray";
				//svg.appendChild(svgElement<SVGCircleElement>("circle", {cx: x, cy: y, r: 3, fill}));
				}
			}
		}

	private polygons(svg:SVGSVGElement, island:SVGPathElement, width:number, height:number):void
		{
		const polygon = new Polygon(6);

		for (let x = 0; x < width; x += 20)
			{
			for (let y = 0; y < height; y += 20)
				{
				if (island.isPointInFill(new DOMPoint(x, y)))
					{
					const points = polygon.getVertices(x, y, 12).map(point => `${point.x},${point.y}`).join(" ");
					svg.appendChild(svgElement<SVGPolygonElement>("polygon", {points, fill: "none", stroke: "black"}));
					}
				}
			}
		}
	}
*/

/*
import { type Point2D, Hexagon, Polygon } from "@cdpi/geometry.js";
import { SVG_NAMESPACE, Path, toDOMPoint, polygon, setAttributes } from "@cdpi/html.js";

function draw(svg:SVGSVGElement, island:SVGPolygonElement):void
	{
	drawGrid(svg, island);
	}

function drawGrid(svg:SVGSVGElement, island:SVGPolygonElement):void
	{
	for (let x = 0; x < 20; x++)
		{
		for (let y = 0; y < 20; y++)
			{
			const points = new Hexagon(20, x * 20, y * 20).vertices;

			const domPoints = points.map(toDOMPoint);

			if (domPoints.every(domPoint => island.isPointInFill(domPoint)))
				{
				const cell = polygon(points, "none", "black");
				svg.appendChild(cell);
				}
			}
		}
	}

function tuto():void
	{
	const svg = document.getElementsByTagNameNS(SVG_NAMESPACE, "svg").item(0) as SVGSVGElement;

	const island = new Polygon(12, 250, 250, 250);
	const points = island.getRandomVertices(150, 230);

	//const d = Path.getCurvedPathFromPoints(points).toString();
	//const shape = svgElement<SVGPathElement>("path", {d, fill: "#ad9a79", filter: "url(#shape)"});
	const shape = polygon(points, "#ad9a79");

	svg.appendChild(shape);

	draw(svg, shape);
	}

export
	{
	tuto
	};
*/

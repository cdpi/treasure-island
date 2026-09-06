
//import { type Point2D, Hexagon, Polygon } from "@cdpi/geometry.js";
//import { Path, toDOMPoint, polygon, setAttributes } from "@cdpi/html.js";
import { Path, feDisplacementMap, feMorphology, feTurbulence, svgElement } from "@cdpi/html.js";

function svgFilter():SVGFilterElement
	{
	/*
	const attributes:Attributes =
		{
		id: Island.Filter.name,
		colorInterpolationFilters: "linearRGB",
		filterUnits: "objectBoundingBox",
		primitiveUnits: "userSpaceOnUse"
		};
	*/

	const filter:SVGFilterElement = svgElement<SVGFilterElement>("filter", {});

	feMorphology("sdsdsd", "dilate", 223, "sdsdds");
	//filter.appendChild(feMorphology("displacementMap", "dilate", Island.Filter.Morphology.radius, "morphology"));

	feTurbulence("turbulence", 0.2, 6, "sdss");
	//filter.appendChild(feTurbulence("turbulence", Island.Filter.Turbulence.baseFrequency, Island.Filter.Turbulence.numOctaves, "turbulence"));

	feDisplacementMap("sdsd", "ddsd", 200, "A", "B", "ddf");
	//filter.appendChild(feDisplacementMap("morphology", "turbulence", Island.Filter.DisplacementMap.scale, "R", "G", "displacementMap"));

	return filter;
	}

function water():SVGRectElement
	{
	return svgElement<SVGRectElement>("rect", {x: 0, y: 0, width: "100%", height: "100%", fill: "var(--water-color)"});
	}

function create()
	{
	water();
	svgFilter();
	}

export
	{
	create
	};


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

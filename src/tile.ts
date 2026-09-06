
import { type Point2D } from "@cdpi/geometry.js";

class Tile
	{
	private dug:boolean = false;

	public constructor(private readonly position:Point2D)
		{
		}

	public get isDug():boolean
		{
		return this.dug;
		}
	}

export
	{
	Tile
	};

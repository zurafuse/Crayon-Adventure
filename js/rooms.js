var room = 0;

function populate(room){
	if (room == 0)
	{
		//ROOM 1
		//rocks
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 4, 4, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 5, 4, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 6, 4, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 10, 4, sprtHtControl, sprtHtControl, "rock"));
		//lock
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 100, 100, 100, 7, 11, sprtHtControl, sprtHtControl, "lock"));
		//water
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 23, 4, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 23, 5, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 23, 6, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 23, 7, sprtHtControl, sprtHtControl, "water"));
		//trees
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 4, 1, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 5, 1, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 6, 1, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 7, 1, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 2, 8, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 7, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 7, 12, sprtHtControl, sprtHtControl));
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));
		//road
		for (i = 0; i < 20; i++)
		{
				backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, i, 2, sprtHtControl, sprtHtControl));
		}
		for (i = 2; i < 20; i++)
		{
				backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, 20, i, sprtHtControl, sprtHtControl));
		}				
	}
}

populate(room);
var config_data = `
{
	"title": "Scouting PASS 2023",
	"page_title": "Charged Up",
	"checkboxAs": "10",
	"prematch": [{
			"name": "Scouter Initals",
			"code": "s",
			"type": "scouter",
			"size": 5,
			"maxSize": 5,
			"required": "true"
		},
		{
			"name": "Event",
			"code": "e",
			"type": "event",
			"defaultValue": "2022carv",
			"required": "true",
			"disabled": "true"
		},
		{
			"name": "Match Level",
			"code": "l",
			"type": "level",
			"choices": {
				"qm": "Quals<br>",
				"de": "Double Elimination<br>",
				"f": "Finals"
			},
			"defaultValue": "qm",
			"required": "true"
		},
		{
			"name": "Match #",
			"code": "m",
			"type": "match",
			"min": 1,
			"max": 100,
			"required": "true"
		},
		{
			"name": "Robot",
			"code": "r",
			"type": "robot",
			"choices": {
				"r1": "Red-1",
				"b1": "Blue-1<br>",
				"r2": "Red-2",
				"b2": "Blue-2<br>",
				"r3": "Red-3",
				"b3": "Blue-3"
			},
			"required": "true"
		},
		{
			"name": "Team #",
			"code": "t",
			"type": "team",
			"min": 1,
			"max": 99999
		},
				{
			"name": "Preload",
			"code": "pr",
			"type": "radio",
			"choices": {
				"r": "Cube<br>",
				"e": "Cone<br>",
				"x": "No Preload"
			},
			"defaultValue": "x"
		},
		{
			"name": "Auto Start Position",
			"code": "as",
			"type": "clickable_image",
			"filename": "2023/field_image.png",
			"clickRestriction": "one",
			"shape": "circle 5  purple  true"
		}
	],
	"auton": [

		{
			"name": "Auto Scoring",
			"code": "asg",
			"type": "clickable_image",
			"filename": "2023/new gridmap2.jpg",
			"dimensions": "9 4",
			"clickRestriction": "onePerBox",
			"toggleClick": "true",
			"showFlip": "false",
			"showUndo": "false",
			"shape": "circle 12 black purple true"
		},

{
			"name": "Mobility?",
			"code": "am",
			"type": "bool"
		},
		{
			"name": "Docked",
			"code": "ad",
			"type": "radio",
			"choices": {
				"d": "Docked (not Engaged)<br>",
				"e": "Engaged<br>",
				"a": "Attempted but failed<br>",
				"x": "Not attempted"
			},
			"defaultValue": "x"
		}
	],
	"teleop": [{
			"name": "Cycle Timer",
			"code": "tct",
			"type": "cycle"
		},
		{
			"name": "Docking Timer",
			"code": "ddt",
			"type": "cycle"
		},
		{
			"name": "Grid Scoring",
			"code": "tsg",
			"type": "clickable_image",
			"filename": "2023/new gridmap2jpg",
			"dimensions": "9 4",
			"clickRestriction": "onePerBox",
			"toggleClick": "true",
			"showFlip": "false",
			"showUndo": "false",
			"shape": "circle 12 black purple true",
			"cycleTimer": "tct"
		},
					{ 
		"name": "Dropped",
		"code": "drp",
		"type": "counter"
	},
		{
			"name": "Floor Pickup",
			"code": "fpu",
			"type": "radio",
			"choices": {
				"o": "Cones<br>",
				"u": "Cubes<br>",
				"b": "Both<br>",
				"x": "Not Attempted"
			},
			"defaultValue": "x"
		}
	],
	"endgame": [{
			"name": "Docking Timer",
			"code": "dddt",
			"type": "cycle"
		},
		{
			"name": "Final Status",
			"code": "fs",
			"type": "radio",
			"choices": {
				"p": "Parked<br>",
				"d": "Docked (Not Engaged)<br>",
				"e": "Engaged<br>",
				"a": "Attempted but failed<br>",
				"x": "Not attempted"
			},
			"defaultValue": "x"
		},
		{
			"name": "Total # of alliance<br>robots docked/engaged",
			"code": "dn",
			"type": "counter"
		}
	],
	"postmatch":[ 
		{
			"name": "Died/Immobilized",
			"code": "die",
			"type": "bool"
		},
		{
			"name": "Tippy<br>(almost tipped over)",
			"code": "tip",
			"type": "bool"
		},
		{
			"name": "Comments",
			"code": "co",
			"type": "text",
			"size": 15,
			"maxSize": 457
		}
	]
}`;

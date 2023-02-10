var config_data = `
{
	"title": "Scouting PASS 2023",
	"page_title": "Charged Up",
	"checkboxAs": "10",
	"prematch": [{
			"name": "Scouters Initals",
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
				"r": "Cubey Cube<br>",
				"e": "Coney Cone<br>",
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
			"shape": "circle 5 black purple  true"
		}
	],
	"auton": [

		{
			"name": "Auto Scoring",
			"code": "asg",
			"type": "clickable_image",
			"filename": "2023/new gridmap.jpg",
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
			"name": "Cycles",
			"code": "tct",
			"type": "cycle"
		},
		{
			"name": "The Grid",
			"code": "tsg",
			"type": "clickable_image",
			"filename": "2023/new gridmap.jpg",
			"dimensions": "9 4",
			"clickRestriction": "onePerBox",
			"toggleClick": "true",
			"showFlip": "false",
			"showUndo": "false",
			"shape": "circle 12 black purple true",
			"cycleTimer": "tct"
		},

		{
			"name": "Picked Up a Piece",
			"code": "pup",
			"type": "counter"
		},

		{
			"name": "Dropped A Piece",
			"code": "dap",
			"type": "counter"
		}
	],
	"endgame": [{
			"name": "Docking Timer",
			"code": "dt",
			"type": "timer"
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
	"postmatch": [{
			"name": "Driver Skill",
			"code": "ds",
			"type": "radio",
			"choices": {
				"n": "Not Effective<br>",
				"a": "Average<br>",
				"v": "Very Effective<br>",
				"x": "Not Observed"
			},
			"defaultValue": "x"
		},
		{
			"name": "Links Scored",
			"code": "ls",
			"type": "counter"
		},
		{
			"name": "Defense Rating",
			"code": "dr",
			"type": "radio",
			"choices": {
				"b": "Below Average<br>",
				"a": "Average<br>",
				"g": "Good<br>",
				"e": "Excellent<br>",
				"x": "Did not play defense"
			},
			"defaultValue": "x"
		},
		{
			"name": "Swerve drive?",
			"code": "sd",
			"type": "bool"
		},
		{
			"name": "Speed Rating",
			"code": "sr",
			"type": "radio",
			"choices": {
				"1": "1 (slow)<br>",
				"2": "2<br>",
				"3": "3<br>",
				"4": "4<br>",
				"5": "5 (fast)"
			},
			"defaultValue": "3"
		},
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
			"name": "Dropped Cones (>2)",
			"code": "dc",
			"type": "bool"
		},
		{
			"name": "Make good<br>alliance partner?",
			"tooltip": "Would you want this robot on your alliance in eliminations?",
			"code": "all",
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

}
}`;

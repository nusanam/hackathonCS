
//!! filter text on a web page
    // how are we going to be able to scan the actual text in a page??
    // what is the cutoff for showing red? vs. yellow?
//!! customization
    // ability to add specific words to filter -- actual functionality in options.js
        // pushing that word onto an array to also search through 

// whatever words user provides, it gets pushed into this array. if it's NOT an empty array, we can concat this into a storage array 
// if the user wants to add words, then it gets inserted into blueCustomWords array, which turns chrome page blue;
// if user adds words, those will have to be either pushed into the array or concat (if the input is an array itself)

//let blueCustomWords = []; 
//let customizedWords = []; // is just a storage array for all custom words added
//let blueWordsFiltered; wtheck is this??
                    
//** bad words */
// medium severity words
// const yellowWordsArray = ['damn'] 
//["balls", "butt", "bum", "crap", "damn", "shit", "piss", "poop", "fanny", "pissed", "pisses", "pissing"]

// high severity words


//* store filtered words in variable
//!! figure out how to put variable (yellow or redWordsArray inside regex)
//* counter -- return the length of filtered words

//  /\S/.test(string) returns true if and only if there's a non-space character in string. Tab and newline count as spaces.
// The difference between .split(" ") and .split(/\s+/) is:
// The regex " ", match the space character literally.
// The regex /\s+/, match a single whitespacecharacter (tab, line feed, carriage return, vertical tab, form feed) between one and unlimmited times. (greedy)

// let redWordResults = document.body.textContent.split(/\s+/).sort().filter(/fuck/gi); // checking to see if 
//     // /fuck|shit|bitch|asshole|cunt|twat|motherfucker/gi, '***'
// let redWordCount = redWordResults.length; 

// let yellowWordResults = document.body.textContent.split(/\s+/).sort().filter(/damn/gi)
//     //wordOnChrome => yellowWordsArray.includes(wordOnChrome));
// let yellowWordCount = yellowWordResults.length; 

// if (blueCustomWords) {
//     blueCustomWords = document.body.textContent.split(/\s+/).sort().filter(wordOnChrome => blueCustomWords.includes(wordOnChrome))
// }

//** FUCK */

const effArray = ['fuck', 'FUCK', 'Fuck', 'fUCK', 'fuCK', 'fucK', 'FUck', 'FUCk', 'f*ck', 'fck', 'F*ck', 'F*CK', 'bitch', 'asshole', 'fag', 'bastard', 'douche'];

let elements = document.getElementsByTagName('*'); // stores all elements matching the tag '*' inside an array-like list (nodeList), elements

for (let indexRedWords = 0; indexRedWords < effArray.length; indexRedWords++) { // for loop to search through array of red words
	for (let i = 0; i < elements.length; i++) { // 
		for (let j = 0; j < elements[i].childNodes.length; j++) { 
			let node = elements[i].childNodes[j]; // now node represnts all the child nodes inside index i of element
			if (node.nodeType === 3) { // node.nodeType is integer that identifies what the property is. The actual text inside an element or an attribute has a node.nodeType value of 3. so if the node contains text...
				// then assign that node's nodeValue to a variable so it can store the value of the text, which is a string
				let evilWord = node.nodeValue; // The nodeValue property of the Node interface returns or sets the value of the current node. For text, returns the content of the text node
				let replaced = evilWord.replace(effArray[indexRedWords], '🙉🙈🙊'); // now that you have "found" the text that happens to be a match inside the bad words array, replace it with the 3 monkey emojis.

				if (replaced !== evilWord) {
					// after the replace method, if the replacedWord doesn't match the original text content of the textnode (which it shouldn't), then create a new text node containing the replacedWord (monkeys)
					let newChild = document.createTextNode(replaced);
					// text below first removes the node (old element) since it exists, and replaces it with the newly created replaced textNode;
					elements[i].replaceChild(newChild, node);
				}
			}
		}
	}
}

//** SHIT */

const poop = ['shit', 'SHIT', 'sh*t', 'sh1t', 'Shit'];

let elements2 = document.getElementsByTagName('*'); // stores all elements2 matching the tag '*' inside an array-like list (nodeList), elements2

for (let indexRedWords2 = 0; indexRedWords2 < poop.length; indexRedWords2++) { // for loop to search through array of red words
	for (let i = 0; i < elements2.length; i++) { // 
		for (let j = 0; j < elements2[i].childNodes.length; j++) { 
			let node2 = elements2[i].childNodes[j]; // now node2 represnts all the child nodes inside index i of element
			if (node2.nodeType === 3) { // node2.nodeType is integer that identifies what the property is. The actual text inside an element or an attribute has a node2.nodeType value of 3. so if the node2 contains text...
				// then assign that node2's nodeValue to a variable so it can store the value of the text, which is a string
				let evilWord2 = node2.nodeValue; // The nodeValue property of the Node interface returns or sets the value of the current node2. For text, returns the content of the text node2
				let replaced2 = evilWord2.replace(poop[indexRedWords2], '💩'); // now that you have "found" the text that happens to be a match inside the redWordsArray, replace it with the 3 monkey emojis.

				if (replaced2 !== evilWord2) {
					// after the replace method, if the replaced2Word doesn't match the original text content of the textnode (which it shouldn't), then create a new text node2 containing the replaced2Word (monkeys)
					let newChild2 = document.createTextNode(replaced2);
					// text below first removes the node2 (old element) since it exists, and replaces it with the newly created replaced2 textNode;
					elements2[i].replaceChild(newChild2, node2);
					
				}
			}
		}
	}
}

//** UNICORN */

const unicornArr = ['unicorn', 'UNICORN', 'Unicorn'];

let elements3 = document.getElementsByTagName('*'); // stores all elements3 matching the tag '*' inside an array-like list (node3List), elements3

for (let indexRedWords3 = 0; indexRedWords3 < unicornArr.length; indexRedWords3++) { // for loop to search through array of red words
	for (let i = 0; i < elements3.length; i++) { // 
		for (let j = 0; j < elements3[i].childNodes.length; j++) { 
			let node3 = elements3[i].childNodes[j]; // now node3 represnts all the child node3s inside index i of element
			if (node3.nodeType === 3) { // node3.node3Type is integer that identifies what the property is. The actual text inside an element or an attribute has a node3.node3Type value of 3. so if the node3 contains text...
				// then assign that node3's node3Value to a variable so it can store the value of the text, which is a string
				let evilWord3 = node3.nodeValue; // The node3Value property of the Node3 interface returns or sets the value of the current node3. For text, returns the content of the text node3
				let replaced3 = evilWord3.replace(unicornArr[indexRedWords3], '🦄'); // now that you have "found" the text that happens to be a match inside the bad words array, replace it with the 3 monkey emojis.

				if (replaced3 !== evilWord3) {
					// after the replace method, if the replaced3Word doesn't match the original text content of the textnode3 (which it shouldn't), then create a new text node3 containing the replaced3Word (monkeys)
					let newChild3 = document.createTextNode(replaced3);
					// text below first removes the node3 (old element) since it exists, and replaces it with the newly created replaced3 textNode3;
					elements3[i].replaceChild(newChild3, node3);
				}
			}
		}
	}
}

//** BITCH */
const bishArr = ['bitch', 'BITCH', 'Bitch', 'b1tch', 'B1TCH', 'B1tch', 'b*tch', 'B*TCH', 'B*tch'];

let elements4 = document.getElementsByTagName('*'); // stores all elements4 matching the tag '*' inside an array-like list (node4List), elements4

for (let indexRedWords4 = 0; indexRedWords4 < bishArr.length; indexRedWords4++) { // for loop to search through array of red words
	for (let i = 0; i < elements4.length; i++) { // 
		for (let j = 0; j < elements4[i].childNodes.length; j++) { 
			let node4 = elements4[i].childNodes[j]; // now node4 represnts all the child node4s inside index i of element
			if (node4.nodeType === 3) { // node4.node4Type is integer that identifies what the property is. The actual text inside an element or an attribute has a node4.node4Type value of 3. so if the node4 contains text...
				// then assign that node4's node4Value to a variable so it can store the value of the text, which is a string
				let evilWord4 = node4.nodeValue; // The node4Value property of the Node4 interface returns or sets the value of the current node4. For text, returns the content of the text node4
				let replaced4 = evilWord4.replace(bishArr[indexRedWords4], '👸🏻'); // now that you have "found" the text that happens to be a match inside the bad words array, replace it with the 3 monkey emojis.

				if (replaced4 !== evilWord4) {
					// after the replace method, if the replaced4Word doesn't match the original text content of the textnode4 (which it shouldn't), then create a new text node4 containing the replaced4Word (monkeys)
					let newChild4 = document.createTextNode(replaced4);
					// text below first removes the node4 (old element) since it exists, and replaces it with the newly created replaced4 textNode4;
					elements4[i].replaceChild(newChild4, node4);
				}
			}
		}
	}
}

//** red words */
let redWordsArray;

let redWordsLowerCaseArray = ["balls", "butt", "bum", "crap", "damn", "shit", "4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", "bunny fucker", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "retard", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "minge", "gash", "punani", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", "willy", "xrated", "xxx"];

let redWordsUpperCaseArray = ["balls", "butt", "bum", "crap", "damn", "shit", "punani", "4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", "bunny fucker", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "retard", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "minge", "gash", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", "willy", "xrated", "xxx"];

let redCaps = redWordsUpperCaseArray.map(word => word.charAt(0).toUpperCase() + word.slice(1))

redWordsArray = redWordsLowerCaseArray.concat(redCaps);

let elements5 = document.getElementsByTagName('*'); // stores all5 matching the tag '*' inside an array-like list (node4List),5

for (let indexRedWords5 = 0; indexRedWords5 < redWordsArray.length; indexRedWords5++) { // for loop to search through array of red words
	for (let i = 0; i <redWordsArray.length; i++) { // 
		for (let j = 0; j <elements5[i].childNodes.length; j++) { 
			let node5 = elements5[i].childNodes[j]; // now node4 represnts all the child node4s inside index i of element
			if (node5.nodeType === 3) { // node4.node4Type is integer that identifies what the property is. The actual text inside an element or an attribute has a node4.node4Type value of 3. so if the node4 contains text...
				// then assign that node4's node4Value to a variable so it can store the value of the text, which is a string
				let evilWord5 = node5.nodeValue; // The node4Value property of the Node4 interface returns or sets the value of the current node4. For text, returns the content of the text node4
				let replaced5 = evilWord5.replace(redWordsArray[indexRedWords5], '#OCTOTHORPE#'); // now that you have "found" the text that happens to be a match inside the bad words array, replace it with the 3 monkey emojis.

				if (replaced5 !== evilWord5) {
					// after the replace method, if the replaced4Word doesn't match the original text content of the textnode4 (which it shouldn't), then create a new text node4 containing the replaced4Word (monkeys)
					let newChild5 = document.createTextNode(replaced5);
					// text below first removes the node4 (old element) since it exists, and replaces it with the newly created replaced4 textNode4;
				elements5[i].replaceChild(newChild5, node5);
				}
			}
		}
	}
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
    	if(request.search){
    		findWord(request.searchWord);
    		updateWord(request.searchWord);
    	}

    	if(!request.search){
    		$('span.highlighted').removeClass('highlighted').addClass('previous');
    		$('span.previous').css({'font-weight': 'normal', 'background-color': 'white', 'color': 'black'});
    	}        
        
        sendResponse({farewell: "completed"});
});

//* if user decided to add custom words, then add it to blueCustom
// blueCustomWords.push(/* custom words added from chrome extension form/settings */)
// if (blueCustomWords) addWords(blueCustomWords); // if there are words inside blueCustomWords, then it exists. empty array is falsey


//** depending on counters, modify chrome browser bg/tab */
//** chrome.runtime.onInstalled.addListener( function(){} ) */
    //** function is below with console log statement to test if it's running */

// chrome.runtime.onInstalled.addListener(function() {
//     let currentURL; //** variable to hold the URL of current tab 

    //if ((blueCustomWords.length > 0) && (redWordCount || yellowWordCount))
    // CHANGE TO UNIQUE COLOR
    // chrome.storage.sync.set({color: '#90CAF9'}, function() {
    //     console.log("SCRIPT BRIGHT BLUE COLOR.");
    // });
    
    //** if option below doesn't work try this to fetch URL: chrome.tabs.getCurrent(function(tab) {console.log(tab.url)} );

//     chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
//         currentURL = tabs[0].url;
//      });
    
//     if (redWordCount) {
//     // redWordCount > yellowWordCount || redWordCount > 0; turn browser tab red & background red
//         chrome.storage.sync.set({color: '#8D021F'}, function() {
//             console.log("SCRIPT RED COLOR.");
//         });

//     } else if (yellowWordCount > 0 && redWordCount === 0) {
//     // turn browser tab yellow & background yellow
//         chrome.storage.sync.set({color: '#FADA5E'}, function() {
//             console.log("SCRIPT YELLOW COLOR.");
//         });

//     // } else if ((blueCustomWords.length > 0) && (redWordCount === 0 && yellowWordCount === 0)) {
//     //     chrome.storage.sync.set({color: '#21759B'}, function() {
//     //         console.log("SCRIPT BLUE COLOR.");
//     //     });
//     // }

//     //!! look up what this is doing and edit comments to indicate what its functionality is
//     chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//         chrome.declarativeContent.onPageChanged.addRules([{
//           conditions: [new chrome.declarativeContent.PageStateMatcher({
//             //!! URL NEEDS TO BE OF THE TAB WE ARE ON SO FIGURE OUT HOW TO RETRIEVE SPECIFIC URL TAB
//             pageUrl: {hostEquals: `${currentURL}`},
//           })
//           ],
//               actions: [new chrome.declarativeContent.ShowPageAction()]
//         }]);
//     });
// });

//** functions
//add custom words */
// function addWords(array) { // array parameter = user input
//     return blueCustomWords.concat(array)
// }

//** reset */
// .onclick EventListener
// do we need a function to reset storage of custom words to empty array?
// customizedWords = [];

//** user interface uses popup.html */

//!! DONT FORGET TO LOOK AT THESE TO CHECK IF THEY ARE NECESSARY // 
// "browser_action": {
//     "default_popup": "popup.html",
//     "default_icon": "icon.png"
// },
// "commands": {
//     "_execute_browser_action": {
//         "suggested_key": {
//             "default": "Ctrl+Shift+F",
//             "mac": "MacCtrl+Shift+F"
//         },
//         "description": "Opens hello.html"
//     }



    




/** resources 
var words = document.body.textContent.split(/\s+/).sort().filter(/fuck|shit|bitch|asshole|cunt|twat|motherfucker/gi, '***');
})

document.body.innerText || document.body.textContent would give us text (string) present in the body of the current document.

split(/\s+/) would split the text (string object) collected above into an array of strings by separating the string into substrings.

sort() indeed sort the array that was created above.

The interesting part of the one liner!

filter( function(v,i,o){return v!==o[i-1];}); this method creates a set out of the given array, set as in remove duplicates so that searching/parsing would be faster and better, this can be eliminated.

filter() basically creates a new array with all elements2 that pass the test implemented by the provided function.

*/

    //          /((((((\\\\
    // =====((((((((((\\\\\     '~~!!!~~~BAD WORD BE GONE~~~!!!~~' 
    //      ((           \\\\\\\
    //      ( (*    _/      \\\\\\\ 
    //        \    /  \      \\\\\\________________
    //         |  |   |       </                  ((\\\\
    //         o_|   /        /                      \ \\\\    \\\\\\\
    //              |  ._    (                        \ \\\\\\\\\\\\\\\\
    //              | /                       /       /    \\\\\\\     \\
    //      .______/\/     /                 /       /         \\\
    //     / __.____/    _/         ________(       /\
    //    / / / ________/`_________'         \     /  \_
    //   / /  \ \                             \   \ \_  \
    //  ( <    \ \                             >  /    \ \
    //   \/     \\_                           / /       > )
    //           \_|                         / /       / /
    //                                     _//       _//
    //                                    /_|       /_| 
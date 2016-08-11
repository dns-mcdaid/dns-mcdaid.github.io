---
layout: post
title: The Art of War
has_img: true
img: ../blog_images/art_of_war.jpg
---

_The Art of War_ has a lot of clever insight to offer when strategizing software development. I want to break down each chapter piece by piece, and synthesize the major themes alongside the research I've been doing for this colloquium.

I'm reading this alongside Steve McConnell's _Code Complete_, so forgive me if every knot I tie is between these two texts, I just need to start connecting the dots ASAP. Judging from the book size, I'm also apparently writing as much if not more than Sun Tzu did.

#### Chapter I: Laying Plans

Sun Tzu opens _The Art of War_ with an overview of what he considers the most influential variables in warfare. Most are obvious to us (i.e. which army is stronger, which army is better trained), but he ends the chapter on calculations. He claims that he is able to "foresee who is likely to win or lose" entirely based on calculation. The amount of calculation you perform before war is directly proportional to the amount of success you'll have. This makes sense, but isn't just restricted to War. Contrasting the arguments between McConnell's _Code Complete_ and Brooks' _The Mythical Man-Month_, we see there is a clear difference when it comes to opinions about calculations or preparations in the war of software development. So far, I see Sun Tzu's general as a precursor for Steve McConnell's software architect.

#### Chapter II: Waging War

Chapter two is primarily focused on morale in war, specifically focusing on the length and energy required to wage war. This reminds me of McConnell's concept of coding _into_ a language rather than _in_ it. The difference being that when you're working with unfamiliar resources, you're likely to stick to what you know rather than learning from new experiences. This leads to nonconforming code and frustration the deeper you go into the language. Morale is very important in the software development process, and if you are unable to find a way to keep the work flowing, a project will hit a stand still. The solution is to break up the grueling hours spent on three lines of code with bursts of several hundred lines of less intense algorithmic work.

#### Chapter III: Attack by Stratagem

The meat and potatoes of chapter three are the three ways in which a ruler can bring misfortune upon his army:

1. "By commanding the army to advance or to retreat, being ignorant of the fact that it cannot obey. This is called hobbling the army."
2. "By attempting to govern an army in the same way as he administers a kingdom, being ignorant of the conditions which obtain in an army. This causes restlessness in the soldier's minds."
3. "By employing the officers of his army without discrimination, through the ignorance of the military principle of adaptation to circumstances."

This sounds is exactly like the __WIMP__, or "Why isn't Mary Programming?" problem. The idea is that failure is practically guaranteed in a system where your general, manager, or whoever is unable to understand the perspective of their soldiers, developers, etc. The solution here is to keep people in the loop on what you're doing while you're doing it. Finding a way to explain things at a higher level so that even an incompetent general can right the course before the ship sinks.

#### Chapter IV: Tactical Dispositions

Defense. Defense. Defense. Oh, and did I mention defense? Tzu depicts the greatest fighter as winning "his battles by making no mistakes." In other words, the best offense is a good defense. In programming talk, this means that the successful project isn't always the one that is the flashiest or can do a million things at once, but rather the one that does its set of instructions the most succinctly. This can be carried over into implementation of classes and methods. By keeping code tight and information private, you run a lower risk of other code (whether intentionally or unintentionally) jeopardizing information.

#### Chapter V: Energy

Sometimes less is more. For Sun Tzu, there are only two methods of attack: direct and indirect. Regardless of whatever your plan is, it will have to conform to one or the other. He explains this through the metaphor of color. There are only three primary colors (well, he counts five with black and white), but these few make up all the millions of colors in the world. Having a strong knowledge of your foundation allows you to get creative with your implementation. You see where I'm getting at with this right? More Object-Oriented Programming, I know, I know. But it's true. It only takes a few good abstractions to get a balanced implementation rolling.

#### Chapter VI: Weak Points and Strong

Do you have a minute to talk about our Lord and Savior, the break __point__? Get it? Weak points, break points, ehh alright never mind. The best way to gain an advantage is to be first to the battle field. Well, since the only other party here is either the person who wrote the code I'm looking at or the person who will be looking at my code in ten years, one of the two of us is screwed on the getting there first thing no matter what. So how do we deal with warfare when we're working from a disadvantaged place? Scheme against your enemy (in this case, confusing code). Working on Sungear right now, the hardest thing in the world is coming to understand code that is more poorly documented than my IMDb page (see: "Error: Page Not Found"). Sun Tzu's making me think that maybe, when working with the parts I don't understand, I should actively try to fight this code. Break it, boil it, mash it, stick it in a stew. See what comes out. Maybe it's a stretch, but my thought process right now is if I don't understand how something works at all, it probably won't hurt much to see how it _doesn't_ work. Or maybe I'm just crazy. Probably that one.

#### Chapter VII: Maneuvering

"We are not fit to lead an army on the march unless we are familiar with the face of the country -- its mountains and forests, its pitfalls and precipices, its marches and swamps. ... Whether to concentrate or to divide your troops, most be decided by circumstances." This points directly to collaboration in projects. I can't tell you how many times I've gone back and forth on whether I work better in a group or by myself. At the end of the day, the honest answer is sometimes I like six of one, the rest of the time I prefer half a dozen of the other. The nature of the project matters. If I've been staring all day at a method making HTTP requests that isn't returning the JSON I expect from it, it helps to have a breather and another set of eyes on the code telling me "Well duh, you forgot to call the built-in JSON parser it first." It's the simple stupid mistakes that helping hands can save, and you need a balance of both to get the more robust projects done.

#### Chapter VIII: Variation in Tactics

There are five dangerous faults which may affect a general:

1. Recklessness, which leads to destruction
2. Cowardice, which leads to capture
3. A Hasty Temper, which can be provoked by insults
4. A Delicacy of Honor, which is sensitive to shame
5. Over-Solicitude For His Men, which exposes him to worry and trouble.

This just as well impacts any project worth shipping. Recklessness will lead to poor implementation, and soon enough your code will be useless. If programmers were cowards, we'd all be using FORTRAN and praying to God a user doesn't need more than one task accomplished a time, because our single-core CPUs would crack under the pressure. Building anything worthwhile takes an escape from the comfort zone. Points three and four illustrate the importance of pride in the field. In instances like these, I like to call on the wisdom of Qui-Gon Jinn and say "There's always a bigger fish." I will never be the best programmer out there, in the same way that any person who just wrote their first "Hello World" program in Python 5 minutes ago could be years ahead of me 5 months from now. There's more than enough space for success and failure, the key is letting neither overwhelm you.

#### Chapter IX: The Army on the March

Social tone is important, whether it's among your on or from the mouth of your enemy. For me this can be summarized as "Listen." Look for moments when you and your teammates aren't on the same page, and stop it before a schism is driven between friends.

#### Chapter X: Terrain

"If the enemy has occupied [the terrain] before you, do not follow him, but retreat and try to entice him away." If the program's expectations seem too intense for just one coder, don't panic. Testing is the bomb. Not building a test class for populating a binary search tree with different "potato" nodes is a grave mistake to make. In all seriousness, this is a practice I don't utilize nearly as often as I should. Programs get out of hand when I make X call Y on Z, before ensuring that X is even capable of calling Y and that Z isn't a string with contents "DROP TABLE client_records". Testing is the morning skate before you head out onto the ice that night and get the hat-trick. General ideas are great, but sometimes you need to shoot the puck a little to get a better understanding of goal theory. Sorry for bringing hockey into an already feigned stretch of the imagination, it just helps me appreciate testing.

#### Chapter XI: The Nine Situations

In short, the greatest general is not the one who knows what to do in successful situations, but in situations where all the variables are working against him. I'd say this is a continuation of the coding _into_ a language rather than coding _in_ a language, however extended. I know I'll never know all the best algorithms for every given situation, or all the features of a new language when I'm told this is the one we're working with, but the best code I write isn't the one that changes the background color of a web page in JavaScript, it's the one that made my heart skip a beat every time I hit F5. The hard stuff is more than just resume building, it defines your legacy as a developer.

#### Chapter XII: The Attack by Fire

Well, most of my code isn't burned, but I will say the main virtue is here caution. Development catches fire when a program-breaking bug is found. The solution here is to __a.__ plan ahead for this kind of stuff, and __b.__ not panic when it happens. Panicking can lead to rushed and half-baked functions.

#### Chapter XIII: The Use of Spies

It is always best to rely on the intel others collect before diving into a full-scale attack or project (see: Stack Overflow).

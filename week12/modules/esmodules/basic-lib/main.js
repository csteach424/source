/*
* Spire library - ES modules
* main.jd
*/

/*
* IMPORTS
* - Spire library
*/
import Spire from './lib/spire/spire.js';

/*
* test loggers
* - 
*/

const greeting = 'greetings from the planet Earth';
// basic log to console
Spire.log(`${greeting}...we wish you well`);
// basic directory log to console
Spire.dir({'name': 'test dir logger...'});
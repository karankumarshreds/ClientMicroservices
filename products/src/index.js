/**
 * We are making this indirect import because
 * this imports the modules used in the index
 * file (ie faker) asynchronously
 *
 * **** WHY ARE WE DOING THIS? ****
 * Because, since we are using faker module in
 * multiple projects, we marked it as shared
 * in the webpack config, which makes it load
 * asynchronously. Because the the module fed
 * -eration plugin takes its time to figure
 * out if any other project is using the same
 * module or not, which helps it inform the
 * consumer to import it only once rather than
 * multiple times
 */
import('./bootstrap');

/*
 This example uses every aspect of ES2015 that we covered today.
 ------------
 */

function LessonPlan() {
    this.topics = ['String functions', 'Array functions', 'Object shorthand',
        'Iterables', 'Promises', 'Generators', 'Modules', 'Destructuring', 'Classes',
        'Rest and Spread', 'Default Values', 'Map and Set'];

    this.logTopics = () => {
        console.log('We still have a lot to cover:');
        let i = 0,
            int;

        int = setInterval(() => {
            console.log(` - ${this.topics[i]}...`);
            i++;
            if(i === this.topics.length) {
                clearInterval(int);
            }
        }, 500);
    }
}

const ESNextBreakfastSeries = new LessonPlan();
ESNextBreakfastSeries.logTopics();
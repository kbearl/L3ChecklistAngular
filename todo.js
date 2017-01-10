

angular.module('todoApp', [])
  .controller('L3ChecklistController', function() {
    var l3Checklist = this;
    l3Checklist.todos = [
        {text: 'Must be a Level 2 judge, in good standing, for at least 12 months.', done: true},
        {text: 'Must have scored at least 80% on a Level 3 Preliminary Exam in the last 6 months.', done: false},
        {text: 'Must have acted as Head Judge or Team Leader for at least 5 Competitive (or higher) REL events, managing at least 2 other certified judges, including at least 2 such events in the last 12 months.', done:false},
        {text: 'Must have acted as Head Judge for at least 20 other events, including at least 5 such events from the last 12 months.', done:false},
        {text: 'Must have participated extensively in the pre-certification training and mentoring of at least 2 different judges who certified for Level 1 or Level 2 in the last 12 months.', done:false} ,
        {text:'Must demonstrate communication skills sufficient to act as a Team Leader at the large, international scale, such as Grand Prix events. Must understand English well enough to be up-to-date on official documents.', done:false },
        {text:'Must demonstrate participation in the judge community on a regional or global level beyond just being on staff at events (examples include mailing lists, seminars, articles, projects, etc.).', done:false },
        {text:'Must have written a general (i.e. non-event-specific) self-review in the last 12 months, covering all of the Qualities of Level 3 Judges listed above, graded as Strengths or as Areas for Improvement. If that self-review is more than 6 months old, your application must include a brief update indicating progress on the Qualities of Level 3 Judges.', done:false },
        {text:'Must have submitted at least 6 event-specific (non-certification) reviews on other judges to the Judge Center in the last 12 months, demonstrating the ability to provide accurate and constructive feedback, on both Strengths and Areas for Improvement. Must include at least one review of a Level 1, of a Level 2, and of a Level 3 judge. Must include reviews on judges of at least 2 Regions.', done:false },
        {text:'Must have received two written recommendations from Level 3 judges.', done:false },
        {text: 'Must hold a valid Team Lead Certification or have received confirmation from a GP Head Judge within the last 36 months indicating success in a Team Lead position at a Grand Prix where the checking judge was the Head Judge.', done:false}
      ];



    l3Checklist.remaining = function() {
      var count = 0;
      angular.forEach(l3Checklist.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

  });


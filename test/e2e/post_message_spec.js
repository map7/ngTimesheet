// Scenarios relating to the posting of the timesheets

describe('Post timesheet', function(){
	it("shows message", function(){
		browser().navigateTo('/examples/directive.html')
		expect(element('#message:visible').count()).toBe(0) // Make sure message is hidden
		element('#stop').click();
		expect(element('#message:visible').count()).toBe(1) // Message should be visible
	});

});

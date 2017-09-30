$().ready (function() {

$("#call").click(function() {

		$.getJSON(
			"http://localhost:64055/Students/List",
			function(Students) {
 			$("tBody").empty();
 			for(var students of Students) {
 			var row = "<tr>" + "<td>" + students.FirstName + " " + students.LastName + "</td>";
 			row += "<td>" + students.SAT + "</td>";
 			row += "<td>" + students.GPA + "</td>";
 			row += "<td>" + students.Phone + "</td>";
 				if (students.Major == null) {
					row += "<td>" + "UNDECIDED" + "</td>"
			}	else {
					row += "<td>" + students.Major.Description + "</td>"
				}
				row += "</tr>"
				$("#tbody").append(row);
			};
			
		});
	});
});

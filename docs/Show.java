import java.sql.*;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
public class Show extends HttpServlet
{

public void doPost(HttpServletRequest req,HttpServletResponse res) throws ServletException,IOException
{
res.setContentType("text/html");
PrintWriter out=res.getWriter();
out.println("<html><body>");
try
   {
    Class.forName("com.mysql.jdbc.Driver");
    Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3307/schedule","root","");
	Statement st=con.createStatement();
               ResultSet rs=st.executeQuery("Select * from calendar");
    out.println("<h1 align='center' style='font-family:Cambria'>All Events</h1>");           
	out.println("<table border=1 align='center'>");
	out.println("<tr><th style='background-color:#4285F4;font-size: 20px;color:white;font-family:Cambria'>Teacher name</th><th style='background-color:#4285F4;font-size: 20px;color:white;font-family:Cambria'>Event Name</th><th style='background-color:#4285F4;font-size: 20px;color:white;font-family:Cambria'>Start Date</th><th style='background-color:#4285F4;font-size: 20px;color:white;font-family:Cambria'>End Date</th><th style='background-color:#4285F4;color:white;font-size: 20px;font-family:Cambria'>Description</th></tr>");
	while(rs.next()){
		String name = rs.getString("teachername");
		String eventname = rs.getString("eventname");
		String start = rs.getString("start");
		String end = rs.getString("end");
        String desc = rs.getString("descr");
		out.println("<tr><td style='font-family:Cambria;font-size: 20px;'>"+ name + "</td><td style='font-family:Cambria;font-size: 20px;'>"+ eventname + "</td><td style='font-family:Cambria;font-size: 20px;'>"+ start + "</td><td style='font-family:Cambria;font-size: 20px;'>"+ end + "</td><td style='font-family:Cambria;font-size: 20px;'>"+ desc +"</td></tr>");
		
	}
	out.println("</table>");
	out.println("</body></html>");
	
}
  
catch(Exception ex)
{ 
 out.println(ex);
}
} 
}
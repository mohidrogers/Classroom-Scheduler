import java.sql.*;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
public class Classroom extends HttpServlet
{
//private String user1,pwd1,email1,phone;

public void doPost(HttpServletRequest req,HttpServletResponse res) throws ServletException,IOException
{
   PrintWriter out=res.getWriter();
res.setContentType("text/html");

String tname1=req.getParameter("teachername1");
String ename1=req.getParameter("eventcon1");
String sdname1=req.getParameter("fromdate1");
String sdname2=sdname1.replace('T',' ');
String fdname1=req.getParameter("todate1");
String fdname2=fdname1.replace('T',' ');
String descinp1=req.getParameter("description1");

try
   {
    Class.forName("com.mysql.jdbc.Driver");
    Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3307/schedule","root","");
	Statement st=con.createStatement();
	ResultSet rs=st.executeQuery("Select * from calendar where start='"+sdname2+"'");
	
	if(rs.next()){
		out.println("<center><h1>An Event Already Exists for</h1>"+tname1);
		//out.println("<a href=Registartion_details.html>Please Log in</a></center>");
	}
	else
	{

   PreparedStatement ps=con.prepareStatement("INSERT INTO calendar values(?,?,?,?,?)");
 ps.setString(1,tname1);
ps.setString(2,ename1);
ps.setString(3,sdname2);
ps.setString(4,fdname2);
ps.setString(5,descinp1);
int i=ps.executeUpdate();
if(i>0)
{
	out.println("<h1>Event has been added</h1>");
	//out.println("<a href='/html/wp/Registration_details.html'>Register</a></center>");
}
	}
   }
   //con.close();
catch(Exception ex)
{  out.println(ex);
}
} 
}
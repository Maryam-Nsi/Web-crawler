package ir.darja.dataleh;

import org.w3c.dom.*;
import org.xml.sax.SAXException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import java.io.File;
import java.io.IOException;
import java.util.Scanner;

//public class ReadLoc {
//    public static void main(String[] args) throws IOException, ParserConfigurationException, SAXException {
//        Scanner sc = new Scanner(new File("C:\\Users\\Admin\\Desktop\\data.xml"));
//        StringBuilder stb = new StringBuilder();
//        while (sc.hasNextLine()){
//            stb.append(sc.nextLine());
//        }
//        ParseUnknownXMLStructure.main(stb.toString());
//    }
//}

public class ReadLoc
{
    public static void main(String[] args) throws ParserConfigurationException, SAXException, IOException
    {
        //Get Document Builder
        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        DocumentBuilder builder = factory.newDocumentBuilder();

        //Build Document
        Document document = builder.parse(new File("C:\\Users\\Admin\\Desktop\\data.xml"));
//        Document document = builder.parse(xml);

        //Normalize the XML Structure; It's just too important !!
        document.getDocumentElement().normalize();

        //Here comes the root node
        Element root = document.getDocumentElement();

        //Get all employees
        NodeList nList = document.getElementsByTagName("loc");

        visitChildNodes(nList);
    }

    //This function is called recursively
    private static void visitChildNodes(NodeList nList)
    {
        for (int temp = 0; temp < nList.getLength(); temp++)
        {
            Node node = nList.item(temp);
            if (node.getNodeType() == Node.ELEMENT_NODE)
            {
                System.out.println( node.getTextContent());
                //Check all attributes
//                if (node.hasAttributes()) {
//                    // get attributes names and values
//                    NamedNodeMap nodeMap = node.getAttributes();
//                    for (int i = 0; i < nodeMap.getLength(); i++)
//                    {
//                        Node tempNode = nodeMap.item(i);
//                        System.out.println("Attr name : " + tempNode.getNodeName()+ "; Value = " + tempNode.getNodeValue());
//                    }
//                    if (node.hasChildNodes()) {
//                        //We got more childs; Let's visit them as well
//                        visitChildNodes(node.getChildNodes());
//                    }
//                }
            }
        }
    }
}
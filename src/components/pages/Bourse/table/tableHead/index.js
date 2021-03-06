import React from "react";







import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Font,
    Image,
  } from "@react-pdf/renderer";
  
  const stylePdf = StyleSheet.create({
    tableHeadParent: {
      width: "100%",
      height: 50,
      display: "flex",
      flexDirection: "row-reverse",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: 9,
    },
    tableHead: {
      width:80 ,
      height: 30,
      display: "flex",
      flexDirection:'row',
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#068b78",
      color: "white",
      fontSize:10,
      borderRadius:8,
    },
    tableHeadPrice: {
      width:60 ,
      height: 30,
      display: "flex",
      flexDirection:'row',
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#068b78",
      color: "white",
      fontSize:10,
      borderRadius:8,
    },
    tableHeadName: {
      width:150,
      height: 30,
      display: "flex",
      flexDirection:'row',
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#068b78",
      color: "white",
      fontSize:10,
      borderRadius:8,
    },
    tableHeadCode: {
      width: 55,
      height: 30,
      display: "flex",
      flexDirection:'row',
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#068b78",
      color: "white",
      fontSize:10,
      borderRadius:8,
    },
    tableHeadtahvil: {
      width: 55,
      height: 30,
      display: "flex",
      flexDirection:'row',
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#068b78",
      color: "white",
      fontSize:10,
      borderRadius:8,
    },
   
    tableHeadDes: {
      width: 470,
      height: 30,
      display: "flex",
      flexDirection:'row',
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#068b78",
      color: "white",
      fontSize:10,
      borderRadius:8
    },
  });
  

const TableHeadPdf = () => {
  return (
    <View style={stylePdf.tableHeadParent}>
      <View style={stylePdf.tableHeadCode}>
        <Text>???? </Text>
      </View>
      <View style={stylePdf.tableHeadName}>
        <Text>????????</Text>
      </View>
      <View style={stylePdf.tableHeadName}>
        <Text>???????? ??????????</Text>
      </View>
      <View style={stylePdf.tableHeadDes}>
        <Text>??????</Text>
      </View>
      <View style={stylePdf.tableHead}>
        <Text>?????? ????????</Text>
      </View>
      <View style={stylePdf.tableHeadCode}>
        <Text>???????? ????????</Text>
      </View>
      <View style={stylePdf.tableHeadtahvil}>
        <Text>??????????</Text>
      </View>
      <View style={stylePdf.tableHeadPrice}>
        <Text>???????? ????????????</Text>
      </View>
      <View style={stylePdf.tableHead}>
        <Text>?????????? ????????</Text>
      </View>
    </View>
  );
};

export default TableHeadPdf;
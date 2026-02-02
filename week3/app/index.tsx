import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          ประวัติส่วนตัว
        </Text>
      </View>

      <View style={styles.row}>
        <View style={[styles.box, {backgroundColor: 'red'}]}>
          <Text style={styles.boxText}>รหัส นศ. 66111966</Text>
        </View>
        <View style={[styles.box, {backgroundColor: 'blue'}]}>
          <Text style={styles.boxText}>คณะ: วิดวะ</Text>
        </View>
        <View style={[styles.box, {backgroundColor: 'green'}]}>
          <Text style={styles.boxText}>สาขา: วิดวะคอม</Text>
        </View>
      </View> 
      <View style={styles.contentSection}>
        <Text style={styles.title}>ข้อมูลส่วนตัว:</Text>

        {Array.from({ length: 1}).map((_, index) => (
          <View key={index} style={styles.listItem}>
            <Text>
              ชื่อ: วิศรุต แย้มประยูร
            </Text>
          </View>
        ))}
        {Array.from({ length: 1}).map((_, index) => (
          <View key={index} style={styles.listItem}>
            <Text>
              ชื่อเล่น: โฟล์ค
            </Text>
          </View>
        ))}
        {Array.from({ length: 1}).map((_, index) => (
          <View key={index} style={styles.listItem}>
            <Text>
              email: 66111966@dpu.ac.th
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.contentSection}>
        <Text style={styles.title}>การศึกษา:</Text>

        {Array.from({ length: 1}).map((_, index) => (
          <View key={index} style={styles.listItem}>
            <Text>
              ระดับอุดมศึกษา: มหาวิทยาลัยธุรกิจบัณฑิตย์
            </Text>
          </View>
        ))}
        
        {Array.from({ length: 1}).map((_, index) => (
          <View key={index} style={styles.listItem}>
            <Text>
              สาขา: วิศวกรรมคอมพิวเตอร์ปี3
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.contentSection}>
        <Text style={styles.title}>ที่อยู่:</Text>

        {Array.from({ length: 1}).map((_, index) => (
          <View key={index} style={styles.listItem}>
            <Text>
              18/184 ต.บางม่วง อ.บางใหญ่ จ.นนทบุรี 11140
            </Text>
          </View>
        ))}
      </View>

      <View style={[styles.like_dislikebox, {backgroundColor: 'gray'}]}>
        <Text style={styles.boxText}>สื่งที่ชอบ</Text>
      </View>
        {Array.from({ length: 1}).map((_, index) => (
          <View key={index} style={styles.listItemTwo}>
            <Text>
              ต้มยำกุ้ง
            </Text>
          </View>
        ))}
        {Array.from({ length: 1}).map((_, index) => (
          <View key={index} style={styles.listItemTwo}>
            <Text>
              โปรเจคที่ตรวจผ่าน
            </Text>
          </View>
        ))}
        {Array.from({ length: 1}).map((_, index) => (
          <View key={index} style={styles.listItemTwo}>
            <Text>
              สาวหมวย
            </Text>
          </View>
        ))}
        {Array.from({ length: 1}).map((_, index) => (
          <View key={index} style={styles.listItemTwo}>
            <Text>
              การบ้านที่ไม่เยอะ
            </Text>
          </View>
        ))}
        {Array.from({ length: 1}).map((_, index) => (
          <View key={index} style={styles.listItemTwo}>
            <Text>
              Code ที่ไม่ error
            </Text>
          </View>
        ))}
      <View style={[styles.like_dislikebox, {backgroundColor: 'gray'}]}>
        <Text style={styles.boxText}>สื่งที่ชอบ</Text>
      </View>
        {Array.from({ length: 1}).map((_, index) => (
          <View key={index} style={styles.listItemTwo}>
            <Text>
              หมาติดเป้ง
            </Text>
          </View>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    padding: 20,
  },
  header: {
    height: 100,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  box: {
    flex: 1,
    height: 100,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  boxText: {
    color: 'white',
    fontWeight: '600',
    justifyContent: 'center'
  },
  contentSection: {
    marginTop:10,
  },
  title: {
    fontSize:18,
    fontWeight:'bold',
    marginBottom: 10,
  },
  listItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: 'cyan',
  },
  like_dislikebox: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: 'gray',
    fontSize:22,
  },
  listItemTwo: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: 'green',
  },
});

export default App;

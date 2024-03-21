{
    //! block dành cho myInfor
    var myInfor = {
        name: "Nguyễn Minh Hoàng",
        age: 32,
        address: "Bắc Giang",
        job: "Teacher",
        gender: "lgbt",
        zalo: "https://zalo.me/g/lthxnv127",
        major: "Javascript, Python, Ruby",
    };
    var student1 = {
        name: "Dang",
        age: 20,
        address: "Hà Nội",
        job: "Student",
        gender: "male",
        zalo: "123456789",
        major: "Frontend",
        //Type '{ name: string; age: number; }' is missing the following properties from type 'user': address, job, zalo, gender, major
        //! loại '{name: chuỗi;Tuổi: số;} 'thiếu các thuộc tính sau từ loại' người dùng ': địa chỉ, công việc, zalo, giới tính, chính
    };
    console.log(myInfor);
}
//! block này dành riêng cho myTeachers
{
    var myTeachers = [
        "Hoà",
        "Huy",
        "Tú",
        "Hoàng",
        "Thắng",
        "Đạt",
        "Ngọc",
    ];
    myTeachers.forEach(function (teacher, index) {
        console.log("[".concat(index + 1, "] ").concat(teacher));
    });
}
// myTeachers.toUpperCase();
// const myTeachers =0
{
    var myString = "Hom nay troi dep qua!";
}
// myString.map((item) => {});

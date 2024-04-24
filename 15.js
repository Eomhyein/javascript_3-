// 화살표 함수의 예외사항
// this우회, call, apply, bind보다 편리한 방법
var obj = {
	outer: function () {
		console.log(this);
		var innerFunc = () => {
			console.log(this);
		};
		innerFunc();
	}
};
obj.outer();
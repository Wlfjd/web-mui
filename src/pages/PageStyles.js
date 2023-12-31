export const SignInStyles = {
  Button: {
    mt: 5,
    mb: 2,
    p: "10px",
    borderRadius: "999px",
    background: "#6482FF",
    color: "white",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "black", // 클릭(마우스 오버) 시 배경색 변경
    },
  },
};

export const signInTextFieldStyles = (value) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "10px", // 기본 테두리 두께
      borderColor: value ? "#6482FF" : "#BCBCC4",
    },
    "&:hover fieldset": {
      borderColor: "#6482FF",
    },
    "&.Mui-focused fieldset": {
      borderWidth: "1px",
      borderColor: "#6482FF", // 포커스 시 색상 변경 안 함
    },
  },
  "& .MuiInputBase-input": {
    color: "#6482FF", // 입력된 값의 색상
    "&::placeholder": {
      color: "#BCBCC4", // 플레이스홀더의 색상
      opacity: 1, // 브라우저마다 다른 플레이스홀더 투명도 처리를 일관되게 함
    },
  },
});

export const MainStyles = {
  Tab: {
    fontSize: 18,
    color: "#BCBCC4",
  },
  TabPanel: {
    alignItems: "center",
    padding: "24px 30px",
    position: "relative",
  },
  IconButtonLeft: {
    opacity: 0.3,
    padding: 1,
    position: "absolute",
    top: "22px",
    left: 0,
  },
  IconButtonRight: {
    opacity: 0.3,
    padding: 1,
    position: "absolute",
    top: "22px",
    right: 0,
  },
  ChipContainer: {
    overflowX: "auto",
    whiteSpace: "nowrap",
    "&::-webkit-scrollbar": {
      display: "none", // 스크롤바 숨기기 (선택적)
    },
  },
  TypoGraphy: {
    fontSize: 20,
    fontWeight: 500,
    color: "#545459",
  },
  TabIndicator: {
    height: 0, // 언더라인 두께
    borderRadius: "10px",
  },
};

export const ChipStyle = (click) => ({
  color: click ? "#FF814D" : "#ADADAD",
  borderColor: click ? "#FF814D" : "#ADADAD",
  background: click ? "#FFEAE1" : "",
  fontSize: "14px",
  padding: "4px",
  height: "38px",
  borderRadius: "999px",
  "&&:hover": {
    background: "#FFEAE1",
    color: "#FF814D",
    borderColor: "#FF814D",
  },
});

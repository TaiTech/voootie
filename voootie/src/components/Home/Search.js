import React from "react";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

const useStyle = makeStyles((theme) => ({
  root: {},
  titleBox: {
    backgroundColor: "#2e2e2e",
    color: "#ffffff",
  },
  titleText: {
    fontWeight: "bold",
    paddingLeft: theme.spacing(1),
  },
  searchBox: {
    paddingBottom: theme.spacing(2),
  },
  searchTitle: {
    paddingLeft: theme.spacing(1),
  },
  searchForm: {
    paddingLeft: theme.spacing(1),
    width: "90%",
  },
  keywordForm: {
    paddingLeft: theme.spacing(1),
    width: "90%",
  },
}));

const Search = () => {
  const classes = useStyle();
  // TODO: map area into Number
  const [area, setArea] = React.useState("全国");
  const handleChangeArea = (event) => {
    setArea(event.target.value);
  };
  // TODO: map category into Number
  const [category, setCategory] = React.useState("全てのカテゴリ");
  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };
  const [keywords, setKeywords] = React.useState("");
  const handleChangeKeywords = (event) => {
    setKeywords(event.target.value);
  };
  return (
    <Paper elevation={0} square className={classes.root}>
      <Box className={classes.titleBox}>
        <Typography variant="subtitle1" className={classes.titleText}>
          検索条件
        </Typography>
      </Box>
      <Box className={classes.searchBox}>
        <Typography variant="subtitle1" className={classes.searchTitle}>
          エリア
        </Typography>
        <FormControl className={classes.searchForm}>
          <Select id="area-select" value={area} onChange={handleChangeArea}>
            <MenuItem value={"全国"}>全国</MenuItem>
            <MenuItem value={"都道府県"}>都道府県</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box className={classes.searchBox}>
        <Typography variant="subtitle1" className={classes.searchTitle}>
          カテゴリ
        </Typography>
        <FormControl className={classes.searchForm}>
          <Select
            id="category-select"
            value={category}
            onChange={handleChangeCategory}
          >
            <MenuItem value={"全てのカテゴリ"}>全てのカテゴリ</MenuItem>
            <MenuItem value={"政治・経済"}>政治・経済</MenuItem>
            <MenuItem value={"ファッション"}>ファッション</MenuItem>
            <MenuItem value={"食品"}>食品</MenuItem>
            <MenuItem value={"その他"}>その他</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box className={classes.searchBox}>
        <Typography variant="subtitle1" className={classes.searchTitle}>
          キーワード
        </Typography>
        <FormControl fullWidth className={classes.keywordForm}>
          <TextField
            placeholder="団体や事業名"
            id="keywords"
            value={keywords}
            onChange={handleChangeKeywords}
          />
        </FormControl>
      </Box>
    </Paper>
  );
};

export default Search;

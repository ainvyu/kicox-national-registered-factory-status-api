convert_encoding:
	cat "data/한국산업단지공단_전국등록공장현황_20200229.csv" | iconv -f cp949 -t utf-8 > data/converted_data.csv

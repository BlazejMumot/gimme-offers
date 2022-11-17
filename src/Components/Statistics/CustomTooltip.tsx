import moment from "moment";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    let labelToShow = label;
    if (moment(label).isValid()) {
      labelToShow = moment(label).format("DD/MM/YY");
    }
    return (
      <div className="custom-tooltip">
        <p className="label">
          {labelToShow}
          {`: ${payload[0].value}`}
        </p>
      </div>
    );
  }

  return null;
};
export default CustomTooltip;

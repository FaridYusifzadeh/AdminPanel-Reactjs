import "./WidgetLarge.css";
export default function WidgetLarge() {
  const Button = ({ type }) => {
    return <button className={"widget_large_button " + type}>{type}</button>;
  };
  return (
    <div className="widget_large">
      <h3 className="widget_large_title">Latest Transactions</h3>
      <table className="widget_large_table">
        <tr className="widget_large_tr">
          <th className="widget_large_th">Customer</th>
          <th className="widget_large_th">Date</th>
          <th className="widget_large_th">Amount</th>
          <th className="widget_large_th">Status</th>
        </tr>
        {/* < ================== Approved =================== >  */}
        <tr className="widget_large_tr">
          <td className="widget_large_user">
            <img
              src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
              alt="avatar"
              className="widget_large_img"
            />
            <span className="widget_large_name">Farid Yusifzadeh</span>
          </td>
          <td className="widget_large_date">2 June 2021</td>
          <td className="widget_large_amount">$122.33</td>
          <td className="widget_large_status">
            <Button type="Approved" />
          </td>
        </tr>
        {/* < ================== Declined =================== >  */}
        <tr className="widget_large_tr">
          <td className="widget_large_user">
            <img
              src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
              alt="avatar"
              className="widget_large_img"
            />
            <span className="widget_large_name">Farid Yusifzadeh</span>
          </td>
          <td className="widget_large_date">2 June 2021</td>
          <td className="widget_large_amount">$122.33</td>
          <td className="widget_large_status">
            <Button type="Declined" />
          </td>
        </tr>
        {/* < ================== Pending =================== >  */}
        <tr className="widget_large_tr">
          <td className="widget_large_user">
            <img
              src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
              alt="avatar"
              className="widget_large_img"
            />
            <span className="widget_large_name">Farid Yusifzadeh</span>
          </td>
          <td className="widget_large_date">2 June 2021</td>
          <td className="widget_large_amount">$122.33</td>
          <td className="widget_large_status">
            <Button type="Pending" />
          </td>
        </tr>
        {/* < ================== widget_large_tr =================== >  */}
        <tr className="widget_large_tr">
          <td className="widget_large_user">
            <img
              src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
              alt="avatar"
              className="widget_large_img"
            />
            <span className="widget_large_name">Farid Yusifzadeh</span>
          </td>
          <td className="widget_large_date">2 June 2021</td>
          <td className="widget_large_amount">$122.33</td>
          <td className="widget_large_status">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}

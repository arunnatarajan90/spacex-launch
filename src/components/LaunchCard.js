export default function LaunchCard({ data }) {
  return (
    <div className="Missile">
      <img src={data.links.mission_patch_small} />
      <div className="missileName">
        {data.mission_name} #{data.flight_number}
      </div>
      <div>
        <b>Mission Ids:</b>
        <ul>
          {data.mission_id.map((id) => {
            return <li key={id}>{id}</li>;
          })}
        </ul>
      </div>
      <div>
        <b>Launch year: </b>
        {data.launch_year}
      </div>
      <div>
        <b>Successful Launch: </b>
        {data.launch_success ? "True" : "False"}
      </div>
    </div>
  );
}

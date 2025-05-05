export default function BlipItem(props) {
    
    id = props.id
    title = props.title
    dueDate = props.dueDate
    isCritical = props.isCritical ?? false
    backburner = props.backburner ?? false

    class blipItem = {
        id: id,
        title: title,
        dueDate: dueDate,
        isCritical: isCritical,
        backburner: backburner
    }

    function createBlip() {

    }
    
    <div className="blip-item">

    </div>
};

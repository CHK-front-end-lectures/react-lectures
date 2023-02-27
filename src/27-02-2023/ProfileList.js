// Ekstratojeni nje komponente nga komponenta aktuale dhe caktojeni si prop
// vlerat qe duhet te ndryshojne mbrenda asaj komponente per te shfaqur
// 3 persona te ndryshem
import Person from './Person';

const ProfileList = () => {
  return (
    <div className="profile-list">
      <Person name="John doe" profession="Software engineer" age="32" isEngineer={true} />
      <Person name="Name 2" profession="Profession 2" age="30" />
      <Person name="John doe" profession="Software engineer" age="32" />
    </div>
  );
};

export default ProfileList;

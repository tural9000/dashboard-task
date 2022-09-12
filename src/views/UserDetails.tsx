import styles from "./UserDetails.module.scss";
import motorImg from "../assets/images/motor.svg";
import sharing from "../assets/images/sharing.svg";
import sale from "../assets/images/sale.svg";
import react from "../assets/images/react.svg";
import { Button, Input } from "antd";
import { useEffect, useState } from "react";
import { getUser, getUsers } from "./../api/User";
import { useParams } from "react-router-dom";
import IUser from "./../types/User";
import UserForm from "./UserForm";
import { observer } from "mobx-react-lite";

const { TextArea } = Input;

export type MyParams = {
  id: string;
};
const UserDetails = () => {
  const [data, setData] = useState<IUser | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [value, setValue] = useState<string>('Lorem ipsum dolor sit amet consectetur, adipisicing elit');
  const [note, setNote] = useState<Boolean>(false);
  
  const { id } = useParams<keyof MyParams>() as MyParams;

  const fetchUser = () => {
    setIsLoading(true);
    getUser(id).then((d) => {
      setData(d);
      console.log(d);
      
    }).finally(() => {
      setIsLoading(false);
    });
  }

  useEffect(() => {
    fetchUser()
  }, []);

  const { email, first_name, last_name, image, ip_address } = data ?? {};

  if(isLoading) {
    return <div>Loading...</div>
  }
    const updateNote = (text:string) =>{
    if(note){
      return <TextArea
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Controlled autosize"
            autoSize={{ minRows: 3, maxRows: 5 }}
            style={{ marginLeft: '7rem'}}
          />
    }else{
      return <p>{text}</p>
    }
  }
  return (
    <div className={styles.userPage}>
      <div className={styles.userPage__header}>
        <div className={styles.userPage__header__background}></div>
        <div className={styles.userPage__header__widget}></div>
        <div className={styles.widget__columns}>
          <div className={styles.widget__heading}>
            <h2 style={{ display: "inline" }}>{first_name}</h2>
            <h2 style={{ display: "inline", marginLeft: "0.7rem" }}>
              {last_name}
            </h2>
          </div>
          <div className={styles.widget__text}>
            Lead Mobile User Experience Designer
          </div>
        </div>
      </div>
      <div className={styles.userPage__main}>
        <div className={styles.userPage__main__container}>
          <div className={styles.main__header} >
            <div className={styles.main__header__img}>
              <img src={image} alt="" />
            </div>
            <div className={styles.main__header__text}>
              <h3>Salesforce</h3>
              <p>San Francisco, California</p>
            </div>
            <div className={styles.main__header__btn} >
              <Button onClick={() => setNote(prev => !prev)} 
                      style={{width: '90px'}}>{!note? 'New note': 'Save'}
              </Button>
              <UserForm datas = {data} onComplete={() => fetchUser()}/>
            </div>
          </div>
          <div className={styles.note}>
             {updateNote(value)}
          </div>
          <hr />
          <div className={styles.userInfo}>
            <div className={styles.userInfo__left}>
              <div className={styles.userInfo__left__widget}>
                <h6 className={styles.emailHeading}>Email</h6>
                <p className={styles.emailTxt}>{email}</p>
              </div>
              <div className={styles.userInfo__left__widget}>
                <h6>Ip address</h6>
                <p>{ip_address}</p>
              </div>
              <div className={styles.userInfo__left__widget}>
                <h6>Phone</h6>
                <h4>TBD</h4>
              </div>
              <div className={styles.userInfo__left__widget}>
                <h6>Wave Access-User Groups</h6>
                <h4>No available</h4>
              </div>
            </div>
            <div className={styles.userInfo__left}>
              <div className={styles.userInfo__left__widget}>
                <h6 className={styles.emailHeading}>Company site</h6>
                <p className={styles.emailTxt}>salesforce.com</p>
              </div>
              <div className={styles.userInfo__left__widget}>
                <h6>Fax</h6>
                <p>376 993 9200</p>
              </div>
              <div className={styles.userInfo__left__widget}>
                <h6>Business Day End Hour</h6>
                <h4>23</h4>
              </div>
              <div className={styles.userInfo__left__widget}>
                <h6>Address</h6>
                <h4>
                  745 Travel Street, Unit 1<br />
                  San Francisco, California 97111
                </h4>
              </div>
            </div>
          </div>
          <hr />
          <div className={styles.badges}>
            <div className={styles.badges__img01}>
              <div className={styles.badge}>
                35 <br />
                Badges
              </div>
              <div className={styles.view}>
                <a>View all</a>
              </div>
            </div>
            <div className={styles.badges__img}>
              <img src={react} alt="" />
              <div className={styles.badges__txt}>
                Salesforce <br /> Basics
              </div>
            </div>
            <div className={styles.badges__img}>
              <img src={sale} alt="" />
              <div className={styles.badges__txt}>
                Salesforce <br /> Sales
              </div>
            </div>
            <div className={styles.badges__img}>
              <img src={sharing} alt="" />
              <div className={styles.badges__txt}>
                Salesforce <br /> Sharing
              </div>
            </div>
            <div className={styles.badges__img}>
              <img src={motorImg} alt="" />
              <div className={styles.badges__txt}>
                Salesforce <br /> Motors
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(UserDetails);

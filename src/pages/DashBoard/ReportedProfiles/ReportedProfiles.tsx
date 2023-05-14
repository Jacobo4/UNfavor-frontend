import ReportCard from "./ReportCard";
import styles from "./ReportedProfiles.module.css";
import React from "react";
const ReportedProfiles: React.FC = () => {
    const dataDummie=[
        {
            reportedProfile: "Juan123",
            reportedPhotoProfile: "https://www.kindpng.com/picc/m/429-4296037_empty-profile-picture-jpg-hd-png-download.png",
            reporterProfile: "Jacobo123",
            reporterPhotoProfile: "https://www.kindpng.com/picc/m/429-4296037_empty-profile-picture-jpg-hd-png-download.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non tristique velit, non aliquam sem. In hac habitasse platea dictumst. Morbi sed lobortis nibh. In efficitur dolor vel fermentum sagittis. Mauris et ex ut orci ultricies posuere. Nulla dapibus eget lacus venenatis bibendum. Nunc maximus, purus dapibus ornare blandit, quam felis tincidunt turpis, eget congue lectus massa sed risus. Etiam consectetur purus id leo vestibulum, non dignissim ex lobortis. Sed eget tortor hendrerit, convallis felis sollicitudin, placerat nibh. Suspendisse et erat arcu.",
        },]
  return (
    <div className={styles.ReportedProfiles}>
        <div className={styles.ReportCardsContainer}>
            
          {dataDummie.map((info, index) => <ReportCard{...info}/> )}
        </div>
    </div>
  );
};

export default ReportedProfiles;

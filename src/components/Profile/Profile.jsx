import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

export default function Profile({
  clothingItems,
  onCardClick,
  handleAddClick,
}) {
  return (
    <section className="profile">
      <SideBar />
      <ClothesSection
        onCardClick={onCardClick}
        clothingItems={clothingItems}
        handleAddClick={handleAddClick}
      />
    </section>
  );
}

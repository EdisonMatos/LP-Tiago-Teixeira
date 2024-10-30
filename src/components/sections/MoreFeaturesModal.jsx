import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import TabComponent from "../sectionElements/TabComponent";
import PropTypes from "prop-types";
// import CardModal from "../sectionElements/CardModal";
import ModalComponent from "../interactives/ModalComponent";
import services from "../../content/services";
import ServiceDetailCard from "../cards/ServiceDetailCard";
import content from "../../content/content";
import AcordionModalServices from "../interactives/AcordionModalServices";
import Button from "../interactives/Button";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import IconFeatureCard from "../cards/IconFeatureCard";
import { FaWhatsapp } from "react-icons/fa";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

const MoreFeaturesModal = () => {
  const [visible, setVisible] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);

  const abrirModal = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  return (
    <div>
      <Button
        removeAnchor={true}
        removeTarget={true}
        tagName="div"
        label="Ver mais serviços"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-circle-plus"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8" />
            <path d="M12 8v8" />
          </svg>
        }
        onClick={() => setVisible(true)}
        className="text-secondary bg-black px-[2%] py-[0.8%] mt-[80px] tablet1:mt-[0px]"
      />

      <Dialog
        header="Demais Áreas de Atuação"
        className="font-mainFont"
        headerStyle={{ paddingBottom: "3px" }}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "4000px": "600px", "1440px": "50vw", "600px": "90vw" }}
        contentStyle={{ padding: "1rem", paddingLeft: "", paddingRight: "" }}
      >
        <div className="flex flex-col  desktop1:justify-center items-center gap-[30px]">
          <MotionDivDownToUp className="w-full">
            <IconFeatureCard
              icon={content.texts.features.moreFeatures.card1.ico}
              title={content.texts.features.moreFeatures.card1.title}
              paragraph={content.texts.features.moreFeatures.card1.subtitle}
              className=" desktop1:h-auto mt-[30px] w-full tablet1:w-full desktop1:w-full "
            />
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <IconFeatureCard
              icon={content.texts.features.moreFeatures.card2.ico}
              title={content.texts.features.moreFeatures.card2.title}
              paragraph={content.texts.features.moreFeatures.card2.subtitle}
              className=" desktop1:h-auto mt-[30px] w-full tablet1:w-full desktop1:w-full "
            />
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <IconFeatureCard
              icon={content.texts.features.moreFeatures.card3.ico}
              title={content.texts.features.moreFeatures.card3.title}
              paragraph={content.texts.features.moreFeatures.card3.subtitle}
              className=" desktop1:h-auto mt-[30px] w-full tablet1:w-full desktop1:w-full "
            />
          </MotionDivDownToUp>
          <div className="w-full h-px bg-neutral-400"></div>
          <div className="flex flex-col mb-[30px] items-center">
            <p className="mb-[20px] text-center font-mainFont">
              Quer saber mais detalhes sobre nossas áreas de atuação? <br />
              <br />
              Clique abaixo 👇
            </p>
            <div>
              <Button
                aria-label={content.texts.about.ctaButtonAriaLabel}
                label={content.texts.about.ctaButtonText}
                buttonLink={whatsappContactLink}
                animation={false}
                className="hover:scale-105"
                icon={<FaWhatsapp size={24} />}
              />
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

MoreFeaturesModal.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default MoreFeaturesModal;

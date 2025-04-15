"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { templates } from "@/templates/signatures";

interface TemplateSliderProps {
  onTemplateChange: (template: string) => void;
  currentTemplate: string;
}

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const TemplateSlider = ({ onTemplateChange, currentTemplate }: TemplateSliderProps) => {
  const NextArrow = ({ className, style, onClick }: ArrowProps) => {
    return (
      <div
        className={className}
        style={{ ...style, display: "block", right: "-25px" }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = ({ className, style, onClick }: ArrowProps) => {
    return (
      <div
        className={className}
        style={{ ...style, display: "block", left: "-25px" }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: 0,
    beforeChange: (oldIndex: number, newIndex: number) => {
      const template = templates[newIndex];
      if (template?.id) {
        onTemplateChange(template.id);
      }
    },
    customPaging: (i: number) => {
      const template = templates[i];
      return (
        <div className="pt-4">
          <button className="text-sm">{template?.label || ''}</button>
        </div>
      );
    },
  };

  return (
    <div className="max-w-5xl mx-auto mb-8">
      <Slider {...settings}>
        {templates.map((template) => (
          <div key={template?.id || ''} className="p-2">
            <div
              className={`border p-4 rounded-lg bg-white text-center h-24 w-48 flex items-center justify-center cursor-pointer ${
                currentTemplate === template?.id ? "border-blue-500" : "border-gray-300"
              }`}
              onClick={() => template?.id && onTemplateChange(template.id)}
            >
              <h3 className="text-sm">{template?.label || ''}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TemplateSlider;
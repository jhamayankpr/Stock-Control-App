import React from "react";

interface StatCardDetail {
  title: string;
  amount: string;
  changePercentage: number;
  IconComponent: React.ElementType;
}

interface StatCardProps {
  title: string;
  primaryIcon: React.ReactNode;
  dateRange: string;
  details: StatCardDetail[];
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  primaryIcon,
  dateRange,
  details,
}) => (
  <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4">
    <div className="flex items-center gap-3">
      {primaryIcon}
      <h3 className="text-lg font-bold">{title}</h3>
    </div>
    <div className="text-gray-600 text-sm mb-2">{dateRange}</div>
    {details.map((detail, idx) => (
      <div key={idx} className="flex items-center gap-4 py-1">
        <div>
          <detail.IconComponent className="inline w-5 h-5 mr-2" />
          <span className="font-medium">{detail.title}:</span>
        </div>
        <span className="font-bold">{detail.amount}</span>
        <span className={detail.changePercentage > 0 ? "text-green-600" : "text-red-600"}>
          {detail.changePercentage > 0 ? "+" : ""}
          {detail.changePercentage}%
        </span>
      </div>
    ))}
  </div>
);

export default StatCard;

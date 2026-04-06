import React from "react";
import { useState, useEffect } from "react";
import { ChevronDown, Briefcase, Download } from "lucide-react";

export function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypeingSpeed] = useState(150);

  const title = ["Frontend Developer", "Creative Designer"];


  useEffect(() =>{

  })

  return <div>Hero</div>;
}

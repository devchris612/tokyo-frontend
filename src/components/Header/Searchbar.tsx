"use client";
import React, { ChangeEvent, useCallback, useState } from "react";
import { Input } from "../ui/input";
import { Song } from "@/lib/types";
import axios from "axios";
import _ from "lodash";
import styles from "./index.module.scss";
import playSongAction from "@/app/actions/playAction";
import OutsideAlerter from "@/hooks/useClickOutside";

type Props = {};

function Searchbar({}: Props) {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState<Song[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const fetchSearch = async (name: string) => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/songs/search?name=${name}`
    );
    if (res.data) {
      setSearchResults(res.data);
    }
  };

  const debounceSearch = useCallback(
    _.debounce((value: string) => {
      if (value.length) {
        fetchSearch(value);
      }
    }, 300),
    []
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    debounceSearch(e.target.value);
  };

  return (
    <OutsideAlerter
      action={() => {
        setShowDropdown(false);
      }}>
      <div className="relative">
        <Input
          onFocus={() => setShowDropdown(true)}
          placeholder="Type a song name here..."
          className={styles.page_header_searchbar}
          value={searchInput}
          onChange={handleChange}
        />
        {showDropdown && searchResults.length ? (
          <div className={styles.page_header_searchdropdown}>
            {searchResults.map((res) => {
              return (
                <div
                  key={res._id}
                  onClick={(e) => {
                    playSongAction(res._id);
                  }}
                  className="flex cursor-pointer items-center gap-2 hover:bg-secondary p-4 border-b">
                  <img
                    src={res.imageUrl}
                    alt="img"
                    className="w-16 h-16 rounded-md shadow-md"
                  />
                  <p className="font-semibold">{res.title}</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </OutsideAlerter>
  );
}

export default Searchbar;

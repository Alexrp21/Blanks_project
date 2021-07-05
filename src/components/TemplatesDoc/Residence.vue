<template>
  <body>
    <div id="document">
      <div id="onePage">
        <div id="citizenship">
          <div id="citizenship_1"></div>
          <div id="citizenship_2">
            <div id="citizenship_2_1" class="bgGrey">
              <span>Замежны грамадзянін</span>
            </div>
            <div id="citizenship_2_2">
              <input
                type="checkbox"
                id="citizenship1"
                v-model="allDivsWithInput.citizenship.citizenship_1"
              />
              <label for="citizenship1"></label>
            </div>
            <div id="citizenship_2_3" class="bgGrey">
              <span>Асоба без грамадзянства</span>
            </div>
            <div id="citizenship_2_4">
              <input
                type="checkbox"
                id="citizenship2"
                v-model="allDivsWithInput.citizenship.citizenship_2"
              />
              <label for="citizenship2"></label>
            </div>
          </div>
        </div>
        <div id="firstParte">
          <div id="photo">
            <p>Месца</p>
            <p>для</p>
            <p>фотакарткi</p>
          </div>

          <div id="st">
            <div id="st1">
              <div id="st11">
                <div id="orderNum">
                  <div id="orderNum_title">
                    <span><strong>Заява</strong></span>
                  </div>
                  <div id="orderNum_1">
                    <input
                      class="textCenter"
                      v-model="allDivsWithInput.orderNum.orderNum_1"
                    />
                  </div>
                  <div id="orderNum_2">
                    <input
                      class="textCenter"
                      v-model="allDivsWithInput.orderNum.orderNum_2"
                    />
                  </div>
                  <div id="orderNum_3">
                    <input
                      class="textCenter"
                      v-model="allDivsWithInput.orderNum.orderNum_3"
                    />
                  </div>
                  <div id="orderNum_4">
                    <input
                      class="textCenter"
                      v-model="allDivsWithInput.orderNum.orderNum_4"
                    />
                  </div>
                </div>

                <div id="st112">рэгістрацыйны нумар</div>
              </div>

              <div id="st12">
                <div id="idNum">
                  <div id="idNum_title" class="bgGrey">Iдэнтыфiкацыйны №</div>
                  <div id="idNum_1">
                    <input
                      class="textCenter"
                      maxlength="1"
                      v-model="allDivsWithInput.idNum.idNum_1"
                    />
                  </div>
                  <div id="idNum_2">
                    <input
                      class="textCenter"
                      maxlength="1"
                      v-model="allDivsWithInput.idNum.idNum_2"
                    />
                  </div>
                  <div id="idNum_3">
                    <input
                      class="textCenter"
                      maxlength="1"
                      v-model="allDivsWithInput.idNum.idNum_3"
                    />
                  </div>
                  <div id="idNum_4">
                    <input
                      class="textCenter"
                      maxlength="1"
                      v-model="allDivsWithInput.idNum.idNum_4"
                    />
                  </div>
                  <div id="idNum_5">
                    <input
                      class="textCenter"
                      maxlength="1"
                      v-model="allDivsWithInput.idNum.idNum_5"
                    />
                  </div>
                  <div id="idNum_6">
                    <input
                      class="textCenter"
                      maxlength="1"
                      v-model="allDivsWithInput.idNum.idNum_6"
                    />
                  </div>
                  <div id="idNum_7">
                    <input
                      class="textCenter"
                      maxlength="1"
                      v-model="allDivsWithInput.idNum.idNum_7"
                    />
                  </div>
                  <div id="idNum_8">
                    <input
                      class="textCenter"
                      maxlength="1"
                      v-model="allDivsWithInput.idNum.idNum_8"
                    />
                  </div>
                  <div id="idNum_9">
                    <input
                      class="textCenter"
                      maxlength="1"
                      v-model="allDivsWithInput.idNum.idNum_9"
                    />
                  </div>
                  <div id="idNum_10">
                    <input
                      class="textCenter"
                      maxlength="1"
                      v-model="allDivsWithInput.idNum.idNum_10"
                    />
                  </div>
                  <div id="idNum_11">
                    <input
                      class="textCenter"
                      maxlength="1"
                      v-model="allDivsWithInput.idNum.idNum_11"
                    />
                  </div>
                  <div id="idNum_12">
                    <input
                      class="textCenter"
                      maxlength="1"
                      v-model="allDivsWithInput.idNum.idNum_12"
                    />
                  </div>
                  <div id="idNum_13">
                    <input
                      class="textCenter"
                      maxlength="1"
                      v-model="allDivsWithInput.idNum.idNum_13"
                    />
                  </div>
                  <div id="idNum_14">
                    <input
                      class="textCenter"
                      maxlength="1"
                      v-model="allDivsWithInput.idNum.idNum_14"
                    />
                  </div>
                </div>
                <div id="passDate">
                  <div id="passDate_title" class="bgGrey">
                    Пасведчанне сапраўднае
                  </div>
                  <div id="passDate_1">
                    <input
                      class="textCenter"
                      v-model="allDivsWithInput.passDate.passDate_1"
                    />
                  </div>
                  <div id="passDate_2">
                    <input
                      class="textCenter"
                      v-model="allDivsWithInput.passDate.passDate_2"
                    />
                  </div>
                  <div id="passDate_3">
                    <input
                      class="textCenter"
                      v-model="allDivsWithInput.passDate.passDate_3"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div id="st2">
              <div id="st21" class="bgGrey">
                <span><strong>У</strong></span
                ><small>(назва органа)</small>
              </div>

              <div id="departName">
                <input
                  maxlength="50"
                  placeholder="ЛЕНIНСКI РАУС г.ГРОДНА"
                  v-model="allDivsWithInput.departName"
                />
              </div>
            </div>

            <div id="st3">
              <div id="st31" class="bgGrey">
                <span
                  ><strong>Прашу выдаць (абмяняць) пасведчанне </strong></span
                >
                <span
                  ><strong>на жыхарства у сувязi</strong> (адзначыць
                  прычыну)</span
                >
              </div>

              <div id="reason">
                <input
                  maxlength="60"
                  placeholder="ВЫЕЗД ЗА МЯЖУ"
                  v-model="allDivsWithInput.reason"
                />
              </div>
            </div>

            <div id="st4">
              <div id="st41" class="bgGrey"><span>па-беларуску</span></div>
              <div id="st42" class="bgGrey"><span>па-руску</span></div>

              <div id="st43" class="bgGrey">
                <small>(запаўняецца па жаданню заяўнiка)</small>
                <small>лацiнская транскрыпцыя</small>
              </div>
            </div>

            <div id="st5">
              <div id="st51">
                <div id="st511" class="bgGrey">
                  <span><strong>1.Прозвiшча</strong></span>
                </div>
                <div id="st512" class="bgGrey">
                  <span><strong>2.Iмя</strong></span>
                </div>
                <div id="st513" class="bgGrey">
                  <span><strong>3.Iмя па бацьку</strong></span>
                </div>
              </div>

              <div id="st52">
                <div id="lastNameBel">
                  <input
                    placeholder="СЯРГЕЕВА"
                    v-model="allDivsWithInput.lastNameBel"
                  />
                </div>
                <div id="firstNameBel">
                  <input
                    placeholder="IРЫНА"
                    v-model="allDivsWithInput.firstNameBel"
                  />
                </div>
                <div id="middleNameBel">
                  <input
                    placeholder="IВАНАЎНА"
                    v-model="allDivsWithInput.middleNameBel"
                  />
                </div>
              </div>

              <div id="st53">
                <div id="lastNameRus">
                  <input
                    placeholder="СЕРГЕЕВА"
                    v-model="allDivsWithInput.lastNameRus"
                  />
                </div>
                <div id="firstNameRus">
                  <input
                    placeholder="ИРИНА"
                    v-model="allDivsWithInput.firstNameRus"
                  />
                </div>
                <div id="middleNameRus">
                  <input
                    placeholder="ИВАНОВНА"
                    v-model="allDivsWithInput.middleNameRus"
                  />
                </div>
              </div>

              <div id="st54">
                <div id="lastNameLat">
                  <input v-model="allDivsWithInput.lastNameLat" />
                </div>
                <div id="firstNameLat">
                  <input v-model="allDivsWithInput.firstNameLat" />
                </div>
                <div id="birthDate">
                  <div id="st5431" class="bgGrey">
                    <small><strong>4.Дата</strong></small>
                    <small><strong>нараджэння</strong></small>
                  </div>
                  <div id="birthDate_1">
                    <input
                      maxlength="2"
                      class="textCenter"
                      placeholder="25"
                      v-model="allDivsWithInput.birthDate.birthDate_1"
                    />
                  </div>
                  <div id="birthDate_2">
                    <input
                      maxlength="2"
                      class="textCenter"
                      placeholder="08"
                      v-model="allDivsWithInput.birthDate.birthDate_2"
                    />
                  </div>
                  <div id="birthDate_3">
                    <input
                      maxlength="4"
                      class="textCenter"
                      placeholder="1991"
                      v-model="allDivsWithInput.birthDate.birthDate_3"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div id="st6" class="bgGrey">
              <span><strong>5.Месца нараджэння</strong></span>
            </div>
          </div>
        </div>

        <div id="second">
          <div id="sp1">
            <div id="sp11">
              <div id="sp111" class="bgGrey">
                <span>вёска, пасёлак, горад</span>
              </div>
              <div id="sp112" class="bgGrey"><span>раён</span></div>
              <div id="sp113" class="bgGrey"><span>вобласць (край)</span></div>
              <div id="sp114" class="bgGrey"><span>краiна</span></div>
            </div>

            <div id="sp12">
              <div id="cityBel">
                <input
                  placeholder="г. БЕРДСК"
                  v-model="allDivsWithInput.cityBel"
                />
              </div>
              <div id="districtBel">
                <input v-model="allDivsWithInput.districtBel" />
              </div>
              <div id="regionBel">
                <input
                  v-model="allDivsWithInput.regionBel"
                  placeholder="Новасібірская вобласць"
                />
              </div>
              <div id="countryBel">
                <input
                  placeholder="Расійская Федэрацыя"
                  v-model="allDivsWithInput.countryBel"
                />
              </div>
            </div>

            <div id="sp13">
              <div id="cityRus">
                <input
                  placeholder="г. БЕРДСК"
                  v-model="allDivsWithInput.cityRus"
                />
              </div>
              <div id="districtRus">
                <input v-model="allDivsWithInput.districtRus" />
              </div>
              <div id="regionRus">
                <input
                  v-model="allDivsWithInput.regionRus"
                  placeholder="Новосибирская область"
                />
              </div>
              <div id="countryRus">
                <input
                  placeholder="РОССИЙСКАЯ ФЕДЕРАЦИЯ"
                  v-model="allDivsWithInput.countryRus"
                />
              </div>
            </div>

            <div id="sp14">
              <div id="sp141">
                <div id="sp1411" class="bgGrey">
                  <span><strong>6.Пол</strong></span>
                </div>
                <div id="sp1412" class="bgGrey">
                  <span>М</span><span>Ж</span>
                </div>
              </div>

              <div id="sp142">
                <div id="sexM">
                  <input
                    type="checkbox"
                    id="check1"
                    v-model="allDivsWithInput.sexM"
                  /><label for="check1"></label>
                </div>
                <div id="sexW">
                  <input
                    type="checkbox"
                    id="check2"
                    v-model="allDivsWithInput.sexW"
                  /><label for="check2"></label>
                </div>
              </div>
            </div>
          </div>

          <div id="sp15">
            <div id="sp15_1" class="bgGrey">
              <span><strong>7.Грамадзянства</strong></span>
            </div>
            <div id="nationality">
              <input
                placeholder="Расійская Федэрацыя"
                v-model="allDivsWithInput.nationality"
              />
            </div>
            <div id="sp15_3" class="bgGrey">
              <span><strong>8.Асабiсты №</strong></span>
            </div>
            <div id="identNumber">
              <input v-model="allDivsWithInput.identNumber" />
            </div>
            <div id="sp15_5" class="bgGrey">
              <span><strong>9.Дата прыбыцця</strong></span>
            </div>
            <div id="arrivalDate_1">
              <input
                maxlength="2"
                class="textCenter"
                v-model="allDivsWithInput.spouseBirthDate.arrivalDate_1"
              />
            </div>
            <div id="arrivalDate_2">
              <input
                maxlength="2"
                class="textCenter"
                v-model="allDivsWithInput.spouseBirthDate.arrivalDate_2"
              />
            </div>
            <div id="arrivalDate_3">
              <input
                maxlength="4"
                class="textCenter"
                v-model="allDivsWithInput.spouseBirthDate.arrivalDate_3"
              />
            </div>
          </div>

          <div id="sp2">
            <div id="sp21" class="bgGrey">
              <span><strong>10.Сямейнае становiшча</strong></span>
            </div>
            <div id="sp22" class="bgGrey">
              <span><strong>Прозвiшча</strong></span>
            </div>
            <div id="sp23" class="bgGrey">
              <span><strong>Iмя</strong></span>
            </div>
            <div id="sp24" class="bgGrey">
              <span><strong>Iмя па бацьку</strong></span>
            </div>
          </div>

          <div id="sp3">
            <div id="sp31" class="bgGrey">
              <span>Муж, жонка</span>
            </div>

            <div id="sp32">
              <div id="spouseLastNameBel">
                <input
                  placeholder="СЯРГЕЕЎ"
                  v-model="allDivsWithInput.spouseLastNameBel"
                />
              </div>
            </div>

            <div id="sp33">
              <div id="spouseFirstNameBel">
                <input
                  placeholder="МIКАЛАЙ"
                  v-model="allDivsWithInput.spouseFirstNameBel"
                />
              </div>
            </div>
            <div id="sp34">
              <div id="spouseMiddleNameBel">
                <input
                  placeholder="УЛАДЗIМIРАВIЧ"
                  v-model="allDivsWithInput.spouseMiddleNameBel"
                />
              </div>
            </div>
          </div>

          <div id="sp4">
            <div id="sp41" class="bgGrey"><span>прозвiшча да шлюбу</span></div>

            <div id="lastNameBeforeWedding">
              <input
                v-model="allDivsWithInput.lastNameBeforeWedding"
                placeholder="Папова"
              />
            </div>

            <div id="spouseBirthDate">
              <div id="sp431" class="bgGrey">
                <span><strong>Дата нараджэння</strong></span>
              </div>
              <div id="birthDate_4">
                <input
                  maxlength="2"
                  class="textCenter"
                  placeholder="09"
                  v-model="allDivsWithInput.spouseBirthDate.birthDate_4"
                />
              </div>
              <div id="birthDate_5">
                <input
                  maxlength="2"
                  class="textCenter"
                  placeholder="05"
                  v-model="allDivsWithInput.spouseBirthDate.birthDate_5"
                />
              </div>
              <div id="birthDate_6">
                <input
                  maxlength="4"
                  class="textCenter"
                  placeholder="1980"
                  v-model="allDivsWithInput.spouseBirthDate.birthDate_6"
                />
              </div>
            </div>

            <div id="regDate">
              <div id="sp441" class="bgGrey">
                <span><strong>Дата рэгістрацыі</strong></span>
              </div>
              <div id="regDate_1">
                <input
                  maxlength="2"
                  class="textCenter"
                  placeholder="02"
                  v-model="allDivsWithInput.regDate.regDate_1"
                />
              </div>
              <div id="regDate_2">
                <input
                  maxlength="2"
                  class="textCenter"
                  placeholder="11"
                  v-model="allDivsWithInput.regDate.regDate_2"
                />
              </div>
              <div id="regDate_3">
                <input
                  maxlength="4"
                  class="textCenter"
                  placeholder="2015"
                  v-model="allDivsWithInput.regDate.regDate_3"
                />
              </div>
            </div>
          </div>

          <div id="sp5">
            <div id="sp51" class="bgGrey">
              <span>пасведчанне</span>
              <span>выдадзена</span>
            </div>
            <div id="certificate">
              <input
                placeholder="А/ЗАГС КАСТРЫЧНIЦКАГА Р-НА г.ГРОДНА"
                v-model="allDivsWithInput.certificate"
              />
            </div>
            <div id="sp53" class="bgGrey"><span>а/з</span></div>
            <div id="regOfficeNum">
              <input
                class="textCenter"
                placeholder="3251"
                v-model="allDivsWithInput.regOfficeNum"
              />
            </div>
          </div>

          <div id="sp7">
            <div id="sp71" class="bgGrey">
              <span><strong>11.Дзеці</strong> (да 18 гадоу)</span>
            </div>
            <div id="sp72" class="bgGrey">
              <span><strong>Прозвiшча</strong></span>
            </div>
            <div id="sp73" class="bgGrey">
              <span><strong>Iмя</strong></span>
            </div>
            <div id="sp74" class="bgGrey">
              <span><strong>Iмя па бацьку</strong></span>
            </div>
            <div id="sp75" class="bgGrey">
              <span><strong>Дата нараджэння</strong></span>
            </div>
          </div>

          <div id="sp8">
            <div id="child">
              <div id="child_1">
                <input
                  placeholder="СЫН"
                  v-model="allDivsWithInput.child.child_1"
                />
              </div>
              <div id="child_2">
                <input v-model="allDivsWithInput.child.child_2" />
              </div>
              <div id="child_3">
                <input v-model="allDivsWithInput.child.child_3" />
              </div>
            </div>

            <div id="childLastName">
              <div id="childLastName_1">
                <input
                  v-model="allDivsWithInput.childLastName.childLastName_1"
                  placeholder="Сяргееў"
                />
              </div>
              <div id="childLastName_2">
                <input
                  v-model="allDivsWithInput.childLastName.childLastName_2"
                />
              </div>
              <div id="childLastName_3">
                <input
                  v-model="allDivsWithInput.childLastName.childLastName_3"
                />
              </div>
            </div>

            <div id="childFirstName">
              <div id="childFirstName_1">
                <input
                  v-model="allDivsWithInput.childFirstName.childFirstName_1"
                  placeholder="Андрэй"
                />
              </div>
              <div id="childFirstName_2">
                <input
                  v-model="allDivsWithInput.childFirstName.childFirstName_2"
                />
              </div>
              <div id="childFirstName_3">
                <input
                  v-model="allDivsWithInput.childFirstName.childFirstName_3"
                />
              </div>
            </div>

            <div id="childMiddleName">
              <div id="childMiddleName_1">
                <input
                  v-model="allDivsWithInput.childMiddleName.childMiddleName_1"
                  placeholder="Мікалаевіч"
                />
              </div>
              <div id="childMiddleName_2">
                <input
                  v-model="allDivsWithInput.childMiddleName.childMiddleName_2"
                />
              </div>
              <div id="childMiddleName_3">
                <input
                  v-model="allDivsWithInput.childMiddleName.childMiddleName_3"
                />
              </div>
            </div>

            <div id="childBirthDate_day">
              <div id="childBirthDate_day_1">
                <input
                  maxlength="2"
                  class="textCenter"
                  v-model="
                    allDivsWithInput.childBirthDate_day.childBirthDate_day_1
                  "
                  placeholder="15"
                />
              </div>
              <div id="childBirthDate_day_2">
                <input
                  maxlength="2"
                  class="textCenter"
                  v-model="
                    allDivsWithInput.childBirthDate_day.childBirthDate_day_2
                  "
                />
              </div>
              <div id="childBirthDate_day_3">
                <input
                  maxlength="2"
                  class="textCenter"
                  v-model="
                    allDivsWithInput.childBirthDate_day.childBirthDate_day_3
                  "
                />
              </div>
            </div>

            <div id="childBirthDate_month">
              <div id="childBirthDate_month_1">
                <input
                  maxlength="2"
                  class="textCenter"
                  v-model="
                    allDivsWithInput.childBirthDate_month.childBirthDate_month_1
                  "
                  placeholder="04"
                />
              </div>
              <div id="childBirthDate_month_2">
                <input
                  maxlength="2"
                  class="textCenter"
                  v-model="
                    allDivsWithInput.childBirthDate_month.childBirthDate_month_2
                  "
                />
              </div>
              <div id="childBirthDate_month_3">
                <input
                  maxlength="2"
                  class="textCenter"
                  v-model="
                    allDivsWithInput.childBirthDate_month.childBirthDate_month_3
                  "
                />
              </div>
            </div>

            <div id="childBirthDate_year">
              <div id="childBirthDate_year_1">
                <input
                  maxlength="4"
                  class="textCenter"
                  v-model="
                    allDivsWithInput.childBirthDate_year.childBirthDate_year_1
                  "
                  placeholder="2015"
                />
              </div>
              <div id="childBirthDate_year_2">
                <input
                  maxlength="4"
                  class="textCenter"
                  v-model="
                    allDivsWithInput.childBirthDate_year.childBirthDate_year_2
                  "
                />
              </div>
              <div id="childBirthDate_year_3">
                <input
                  maxlength="4"
                  class="textCenter"
                  v-model="
                    allDivsWithInput.childBirthDate_year.childBirthDate_year_3
                  "
                />
              </div>
            </div>
          </div>

          <div id="sp9" class="bgGrey">
            <span>
              <strong>12.Адрас месца жыхарства</strong>
              – назва вобласцi, раёна, сельсавета, горада (пасёлка, вёскi),
              вулiцы, дом №, корпус №, кватэра №</span
            >
          </div>

          <div id="sp10">
            <div id="sp101">
              <div id="sp1011" class="bgGrey"><span>па беларуску</span></div>
              <div id="sp1012" class="bgGrey"><span>па руску</span></div>
            </div>

            <div id="sp102">
              <div id="addressBel">
                <input
                  placeholder="г. ГРОДНА, ВУЛ. ГОРКАГА д. 29 кв. 15"
                  v-model="allDivsWithInput.addressBel"
                />
              </div>
              <div id="addressRus">
                <input
                  placeholder="г. ГРОДНО, УЛ. ГОРЬКОГО д. 29 кв. 15"
                  v-model="allDivsWithInput.addressRus"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="twoPage">
        <div id="sl1">
          <div id="sl1_1" class="bgGrey">
            <span><strong>13.Прававы статус</strong></span>
          </div>

          <div id="legalStatus">
            <input
              placeholder="Пастаянны жыхар"
              v-model="allDivsWithInput.legalStatus"
            />
          </div>
        </div>

        <div id="sl4">
          <div id="sl41" class="bgGrey">
            <span><strong>Подпiс грамадзянiна</strong></span>
          </div>
          <div id="sl42"></div>
          <div id="sl43" class="bgGrey">
            <span><strong>Дата</strong></span>
          </div>
          <div id="date_1">
            <input
              maxlength="2"
              class="textCenter"
              v-model="allDivsWithInput.date_1"
            />
          </div>
          <div id="date_2">
            <input
              maxlength="2"
              class="textCenter"
              v-model="allDivsWithInput.date_2"
            />
          </div>
          <div id="sl46">
            <div id="date_3">
              <input
                maxlength="4"
                class="textCenter"
                v-model="allDivsWithInput.date_3"
              />
            </div>
            <div id="sl462"><span>г.</span></div>
          </div>
          <div id="sl47" class="bgGrey">
            <span><strong>Сведчу</strong></span>
            <span>(подпiс, прозвiшча)</span>
          </div>
          <div id="sl48"></div>
          <div id="lastName"><input v-model="allDivsWithInput.lastName" /></div>
        </div>

        <div id="sl5" class="bgGrey">
          <span><strong>14. Падставы для выдачы пасведчання</strong></span>
        </div>

        <div id="sl6">
          <div id="sl61" class="bgGrey">
            <span><strong>Назва дакумента</strong></span>
          </div>
          <div id="sl62" class="bgGrey">
            <span><strong>Серыя</strong></span>
          </div>
          <div id="sl63" class="bgGrey">
            <span><strong>Нумар</strong></span>
          </div>
          <div id="sl64" class="bgGrey">
            <span><strong>Дата, а/з</strong></span>
          </div>
          <div id="sl65" class="bgGrey">
            <span><strong>Кiм выдадзены</strong></span>
          </div>
        </div>

        <div id="sl7">
          <div id="docName1">
            <div id="docName1_1">
              <input
                placeholder="ПАШПАРТ"
                v-model="allDivsWithInput.docName1.docName1_1"
              />
            </div>
            <div id="docName1_2">
              <input v-model="allDivsWithInput.docName1.docName1_2" />
            </div>
          </div>

          <div id="docSeries_1">
            <input
              maxlength="4"
              class="textCenter"
              placeholder="КН"
              v-model="allDivsWithInput.docSeries_1"
            />
          </div>

          <div id="docNum_1">
            <input
              class="textCenter"
              placeholder="1234567"
              v-model="allDivsWithInput.docNum_1"
            />
          </div>

          <div id="sl74">
            <div id="docDate1">
              <div id="docDate1_1">
                <input
                  maxlength="2"
                  class="textCenter"
                  placeholder="01"
                  v-model="allDivsWithInput.docDate1.docDate1_1"
                />
              </div>
              <div id="docDate1_2">
                <input
                  maxlength="2"
                  class="textCenter"
                  placeholder="09"
                  v-model="allDivsWithInput.docDate1.docDate1_2"
                />
              </div>
              <div id="docDate1_3">
                <input
                  maxlength="4"
                  class="textCenter"
                  placeholder="2014"
                  v-model="allDivsWithInput.docDate1.docDate1_3"
                />
              </div>
            </div>

            <div id="docRegOfficeNum_1">
              <input
                class="textCenter"
                v-model="allDivsWithInput.docRegOfficeNum_1"
              />
            </div>
          </div>

          <div id="docDepartName1">
            <div id="docDepartName1_1">
              <input
                placeholder="Бердсаўскім РАУС г. Бердск"
                v-model="allDivsWithInput.docDepartName1.docDepartName1_1"
              />
            </div>
            <div id="docDepartName1_2">
              <input
                v-model="allDivsWithInput.docDepartName1.docDepartName1_2"
              />
            </div>
          </div>
        </div>

        <div id="sl8">
          <div id="docName2">
            <div id="docName2_1">
              <input v-model="allDivsWithInput.docName2.docName2_1" />
            </div>
            <div id="docName2_2">
              <input v-model="allDivsWithInput.docName2.docName2_2" />
            </div>
          </div>

          <div id="docSeries_2">
            <input
              maxlength="4"
              class="textCenter"
              v-model="allDivsWithInput.docSeries_2"
            />
          </div>

          <div id="docNum_2">
            <input class="textCenter" v-model="allDivsWithInput.docNum_2" />
          </div>

          <div id="sl84">
            <div id="docDate2">
              <div id="docDate2_1">
                <input
                  maxlength="2"
                  class="textCenter"
                  v-model="allDivsWithInput.docDate2.docDate2_1"
                />
              </div>
              <div id="docDate2_2">
                <input
                  maxlength="2"
                  class="textCenter"
                  v-model="allDivsWithInput.docDate2.docDate2_2"
                />
              </div>
              <div id="docDate2_3">
                <input
                  maxlength="4"
                  class="textCenter"
                  v-model="allDivsWithInput.docDate2.docDate2_3"
                />
              </div>
            </div>

            <div id="docRegOfficeNum_2">
              <input
                class="textCenter"
                v-model="allDivsWithInput.docRegOfficeNum_2"
              />
            </div>
          </div>

          <div id="docDepartName2">
            <div id="docDepartName2_1">
              <input
                v-model="allDivsWithInput.docDepartName2.docDepartName2_1"
              />
            </div>
            <div id="docDepartName2_2">
              <input
                v-model="allDivsWithInput.docDepartName2.docDepartName2_2"
              />
            </div>
          </div>
        </div>

        <div id="sl9">
          <div id="docName3">
            <div id="docName3_1">
              <input v-model="allDivsWithInput.docName3.docName3_1" />
            </div>
            <div id="docName3_2">
              <input v-model="allDivsWithInput.docName3.docName3_2" />
            </div>
          </div>

          <div id="docSeries_3">
            <input
              maxlength="4"
              class="textCenter"
              v-model="allDivsWithInput.docSeries_3"
            />
          </div>

          <div id="docNum_3">
            <input class="textCenter" v-model="allDivsWithInput.docNum_3" />
          </div>

          <div id="sl94">
            <div id="docDate3">
              <div id="docDate3_1">
                <input
                  maxlength="2"
                  class="textCenter"
                  v-model="allDivsWithInput.docDate3.docDate3_1"
                />
              </div>
              <div id="docDate3_2">
                <input
                  maxlength="2"
                  class="textCenter"
                  v-model="allDivsWithInput.docDate3.docDate3_2"
                />
              </div>
              <div id="docDate3_3">
                <input
                  maxlength="4"
                  class="textCenter"
                  v-model="allDivsWithInput.docDate3.docDate3_3"
                />
              </div>
            </div>

            <div id="docRegOfficeNum_3">
              <input
                class="textCenter"
                v-model="allDivsWithInput.docRegOfficeNum_3"
              />
            </div>
          </div>

          <div id="docDepartName3">
            <div id="docDepartName3_1">
              <input
                v-model="allDivsWithInput.docDepartName3.docDepartName3_1"
              />
            </div>
            <div id="docDepartName3_2">
              <input
                v-model="allDivsWithInput.docDepartName3.docDepartName3_2"
              />
            </div>
          </div>
        </div>

        <div id="sl10" class="bgGrey">
          <span
            ><strong
              >15.Заяву i прадстаýленыя дакументы прыняý(ла) (прозвiшча
              супрацоýнiка службы, подпiс, дата)</strong
            ></span
          >
        </div>

        <div id="sl11">
          <div id="emplName_1">
            <input v-model="allDivsWithInput.emplName_1" />
          </div>
          <div id="date_4">
            <input
              maxlength="2"
              class="textCenter"
              v-model="allDivsWithInput.date_4"
            />
          </div>
          <div id="date_5">
            <input
              maxlength="2"
              class="textCenter"
              v-model="allDivsWithInput.date_5"
            />
          </div>
          <div id="date_6">
            <input
              maxlength="4"
              class="textCenter"
              v-model="allDivsWithInput.date_6"
            />
          </div>
        </div>

        <div id="sl12">
          <div id="sl121" class="bgGrey">
            <span><strong>13.Пасведчанне аформiý</strong></span>
            <small>(пасада, прозвiшча, подпiс, дата)</small>
          </div>
          <div id="emplName_2">
            <input v-model="allDivsWithInput.emplName_2" />
          </div>
          <div id="date_7">
            <input
              maxlength="2"
              class="textCenter"
              v-model="allDivsWithInput.date_7"
            />
          </div>
          <div id="date_8">
            <input
              maxlength="2"
              class="textCenter"
              v-model="allDivsWithInput.date_8"
            />
          </div>
          <div id="date_9">
            <input
              maxlength="4"
              class="textCenter"
              v-model="allDivsWithInput.date_9"
            />
          </div>
        </div>

        <div id="sl13">
          <div id="sl131" class="bgGrey">
            <span><strong>14.Пасведчанне выдаý</strong></span>
            <small>(пасада, назва органа, прозвiшча, подпiс)</small>
          </div>
          <div id="emplName_3">
            <input v-model="allDivsWithInput.emplName_3" />
          </div>
        </div>

        <div id="sl14">
          <div id="sl141">
            <div id="sl1411">
              <div id="sl14111" class="bgGrey">
                <span><strong>Пасведчанне</strong></span>
                <span><strong>серыi</strong></span>
              </div>

              <div id="newPassportSeries">
                <input
                  maxlength="2"
                  class="textCenter"
                  v-model="allDivsWithInput.newPassportSeries"
                />
              </div>

              <div id="sl14113" class="bgGrey">
                <span><strong>нумар</strong></span>
              </div>
            </div>

            <div id="sl1412" class="bgGrey">
              <span><strong>Раней атрыманае пасведчанне серыi</strong></span>
            </div>
          </div>

          <div id="sl142">
            <div id="sl1421">
              <div id="newPassportNumber">
                <input
                  class="textCenter"
                  v-model="allDivsWithInput.newPassportNumber"
                />
              </div>

              <div id="sl14212" class="bgGrey">
                <span><strong>ад</strong></span>
              </div>
            </div>

            <div id="sl1422">
              <div id="oldPassportSeries">
                <input
                  maxlength="2"
                  class="textCenter"
                  v-model="allDivsWithInput.oldPassportSeries"
                />
              </div>

              <div id="sl14222" class="bgGrey">
                <span><strong>нумар</strong></span>
              </div>
            </div>
          </div>

          <div id="sl143">
            <div id="sl1431">
              <div id="date_10">
                <input
                  maxlength="2"
                  class="textCenter"
                  v-model="allDivsWithInput.date_10"
                />
              </div>
              <div id="date_11">
                <input
                  maxlength="2"
                  class="textCenter"
                  v-model="allDivsWithInput.date_11"
                />
              </div>
              <div id="date_12">
                <input
                  maxlength="4"
                  class="textCenter"
                  v-model="allDivsWithInput.date_12"
                />
              </div>
            </div>

            <div id="oldPassportNumber">
              <input
                class="textCenter"
                v-model="allDivsWithInput.oldPassportNumber"
              />
            </div>
          </div>

          <div id="sl144">
            <div id="sl1441">
              <div id="sl14411" class="bgGrey">
                <span><strong>атрымаý (ла)</strong> (подпiс, дата)</span>
              </div>

              <div id="sl14412"></div>
            </div>

            <div id="sl1442" class="bgGrey">
              <span
                ><strong>здадзена</strong> (дата, калi не – адзначыць
                прычыну)</span
              >
            </div>
          </div>

          <div id="date_13">
            <div id="date_13_1">
              <input
                maxlength="2"
                class="textCenter"
                v-model="allDivsWithInput.date_13.date_13_1"
              />
            </div>
            <div id="date_13_2">
              <input
                maxlength="2"
                class="textCenter"
                v-model="allDivsWithInput.date_13.date_13_2"
              />
            </div>
          </div>

          <div id="date_14">
            <div id="date_14_1">
              <input
                maxlength="2"
                class="textCenter"
                v-model="allDivsWithInput.date_14.date_14_1"
              />
            </div>
            <div id="date_14_2">
              <input
                maxlength="2"
                class="textCenter"
                v-model="allDivsWithInput.date_14.date_14_2"
              />
            </div>
          </div>

          <div id="date_15">
            <div id="date_15_1">
              <input
                maxlength="4"
                class="textCenter"
                v-model="allDivsWithInput.date_15.date_15_1"
              />
            </div>
            <div id="date_15_2">
              <input
                maxlength="4"
                class="textCenter"
                v-model="allDivsWithInput.date_15.date_15_2"
              />
            </div>
          </div>
        </div>

        <div id="other"><input v-model="allDivsWithInput.other" /></div>

        <div id="sl16">
          <span><strong>службовыя адзнакi:</strong></span>
        </div>

        <div id="sl17">
          <textarea v-model="allDivsWithInput.serviceLabels"></textarea>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import { bus } from "@/main";

export default {
  data: () => ({
    allDivsWithInput: {
      citizenship: {
        citizenship_1: "",
        citizenship_2: "",
      },
      orderNum: {
        orderNum_1: "",
        orderNum_2: "",
        orderNum_3: "",
        orderNum_4: "",
      },
      idNum: {
        idNum_1: "",
        idNum_2: "",
        idNum_3: "",
        idNum_4: "",
        idNum_5: "",
        idNum_6: "",
        idNum_7: "",
        idNum_8: "",
        idNum_9: "",
        idNum_10: "",
        idNum_11: "",
        idNum_12: "",
        idNum_13: "",
        idNum_14: "",
      },
      passDate: {
        passDate_1: "",
        passDate_2: "",
        passDate_3: "",
      },
      departName: "",
      reason: "",
      lastNameBel: "",
      firstNameBel: "",
      middleNameBel: "",
      lastNameRus: "",
      firstNameRus: "",
      middleNameRus: "",
      lastNameLat: "",
      firstNameLat: "",
      birthDate: {
        birthDate_1: "",
        birthDate_2: "",
        birthDate_3: "",
      },
      cityBel: "",
      districtBel: "",
      regionBel: "",
      countryBel: "",
      cityRus: "",
      districtRus: "",
      regionRus: "",
      countryRus: "",
      sexM: "",
      sexW: "",
      nationality: "",
      identNumber: "",
      arrivalDate_1: "",
      arrivalDate_2: "",
      arrivalDate_3: "",
      spouseLastNameBel: "",
      spouseFirstNameBel: "",
      spouseMiddleNameBel: "",
      lastNameBeforeWedding: "",
      spouseBirthDate: {
        birthDate_4: "",
        birthDate_5: "",
        birthDate_6: "",
      },
      regDate: {
        regDate_1: "",
        regDate_2: "",
        regDate_3: "",
      },
      certificate: "",
      regOfficeNum: "",
      child: {
        child_1: "",
        child_2: "",
        child_3: "",
      },
      childLastName: {
        childLastName_1: "",
        childLastName_2: "",
        childLastName_3: "",
      },
      childFirstName: {
        childFirstName_1: "",
        childFirstName_2: "",
        childFirstName_3: "",
      },
      childMiddleName: {
        childMiddleName_1: "",
        childMiddleName_2: "",
        childMiddleName_3: "",
      },
      childBirthDate_day: {
        childBirthDate_day_1: "",
        childBirthDate_day_2: "",
        childBirthDate_day_3: "",
      },
      childBirthDate_month: {
        childBirthDate_month_1: "",
        childBirthDate_month_2: "",
        childBirthDate_month_3: "",
      },
      childBirthDate_year: {
        childBirthDate_year_1: "",
        childBirthDate_year_2: "",
        childBirthDate_year_3: "",
      },
      addressBel: "",
      addressRus: "",
      legalStatus: "",
      date_1: "",
      date_2: "",
      date_3: "",
      lastName: "",
      docName1: {
        docName1_1: "",
        docName1_2: "",
      },
      docName2: {
        docName2_1: "",
        docName2_2: "",
      },
      docSeries_1: "",
      docSeries_2: "",
      docSeries_3: "",
      docNum_1: "",
      docNum_2: "",
      docNum_3: "",
      docDate1: {
        docDate1_1: "",
        docDate1_2: "",
        docDate1_3: "",
      },
      docRegOfficeNum_1: "",
      docRegOfficeNum_2: "",
      docRegOfficeNum_3: "",
      docDepartName1: {
        docDepartName1_1: "",
        docDepartName1_2: "",
      },
      docDate2: {
        docDate2_1: "",
        docDate2_2: "",
        docDate2_3: "",
      },
      docDepartName2: {
        docDepartName2_1: "",
        docDepartName2_2: "",
      },
      docName3: {
        docName3_1: "",
        docName3_2: "",
      },
      docDate3: {
        docDate3_1: "",
        docDate3_2: "",
        docDate3_3: "",
      },
      docDepartName3: {
        docDepartName3_1: "",
        docDepartName3_2: "",
      },
      emplName_1: "",
      emplName_2: "",
      emplName_3: "",
      date_4: "",
      date_5: "",
      date_6: "",
      date_7: "",
      date_8: "",
      date_9: "",
      date_10: "",
      date_11: "",
      date_12: "",
      date_13: {
        date_13_1: "",
        date_13_2: "",
      },
      date_14: {
        date_14_1: "",
        date_14_2: "",
      },
      date_15: {
        date_15_1: "",
        date_15_2: "",
      },
      newPassportSeries: "",
      newPassportNumber: "",
      oldPassportSeries: "",
      oldPassportNumber: "",
      other: "",
      serviceLabels: "",
    },
  }),
  created() {
    bus.$on('send-residence-data', async (email) => {
      const data = {
        email,
        content: this.allDivsWithInput
      };
      const response = await fetch(`${process.env.VUE_APP_BACKEND_ADDRESS}/api/send/Residence`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data)
      })
      const result = await response.ok;
      if (result) {
        alert('Сообщение отправлено!');
      } else {
        alert('Ошибка!');
      }
    })
  }
};
</script>

<style scoped>
@media print {
  ::-webkit-input-placeholder {
    color: white;
  }
  ::-moz-placeholder {
    color: white;
  }
  :-moz-placeholder {
    color: white;
  }
  :-ms-input-placeholder {
    color: white;
  }

  #document {
    padding: 0;
    zoom: 71%;
  }

  #onePage {
    margin: 17px 0 0 17px;
  }

  #twoPage {
    margin: 27px 0 0 17px;
    page-break-before: always;
  }

  * {
    line-height: 0.75rem;
  }
}

#document {
  padding: 10px 0 0 10px;
}

.bgGrey {
  background-color: rgb(230, 230, 230);
}

body {
  overflow-x: auto;
  line-height: 0.7rem;
}

span {
  font-size: 0.8rem;
}

div {
  font-size: 0.8rem;
}

small {
  font-size: 0.65rem;
}

input {
  width: 93%;
  height: 90%;
  border: 0px;
  font-size: 0.9rem;
  outline: none;
  text-transform: uppercase;
}

textarea {
  resize: none;
}

.textCenter {
  text-align: center;
}

#onePage {
  display: flex;
  flex-direction: column;
  width: 1060px;
  height: 740px;
}

#citizenship {
  width: 100%;
  height: 3.5%;
  display: flex;
  flex-direction: row;
}

#citizenship_1 {
  width: 47.35%;
  height: 100%;
}

#citizenship_2 {
  width: 52.65%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#citizenship_2_1 {
  width: 45%;
  height: 100%;
  border-left: 1px solid black;
  border-top: 1px solid black;
  border-right: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}

#citizenship_2_2 {
  width: 5%;
  height: 100%;
  border-top: 1px solid black;
  border-right: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}

#citizenship_2_3 {
  width: 45%;
  height: 100%;
  border-top: 1px solid black;
  border-right: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}

#citizenship_2_4 {
  width: 5%;
  height: 100%;
  border-top: 1px solid black;
  border-right: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}

#citizenship_2_2 input,
#citizenship_2_4 input {
  display: none;
}

#citizenship_2_2 label,
#citizenship_2_4 label {
  color: #000;
  cursor: default;
  font-weight: normal;
  padding: 0.4rem 0;
  vertical-align: middle;
}

#citizenship_2_2 label:before,
#citizenship_2_4 label:before {
  content: " ";
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font: 1rem Arial;
  position: relative;
  text-indent: 0px;
  width: 1.5rem;
  height: 0.5rem;
  background: #fff;
  border-image: initial;
  vertical-align: middle;
}

#citizenship_2_2 label:hover,
#citizenship_2_4 label:hover {
  border: 1px solid black;
}

#citizenship_2_2 input:checked + label:before,
#citizenship_2_4 input:checked + label:before {
  content: "X";
}

#firstParte {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 31.3%;
}

#photo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 19%;
  height: 100%;
  border: 1px solid black;
  line-height: 0;
}

#st {
  display: flex;
  flex-direction: column;
  width: 81%;
  height: 100%;
}

#st1 {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 22.8%;
}

#st11 {
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 100%;
  align-items: center;
}

#orderNum {
  display: flex;
  flex-direction: row;
  width: 89%;
  height: 50%;
}

#orderNum_title {
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
}

#orderNum_title span {
  padding-left: 13%;
}

#orderNum_1 {
  width: 20%;
  height: 100%;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
}

#orderNum_2,
#orderNum_3,
#orderNum_4 {
  width: 20%;
  height: 100%;
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
}

#st112 {
  width: 78%;
  height: 50%;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

#st12 {
  display: flex;
  flex-direction: column;
  width: 65%;
  height: 100%;
}

#idNum {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50%;
}

#idNum_title {
  width: 24%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
}

#idNum_1,
#idNum_2,
#idNum_3,
#idNum_4,
#idNum_5,
#idNum_6,
#idNum_7,
#idNum_8,
#idNum_9,
#idNum_10,
#idNum_11,
#idNum_12,
#idNum_13,
#idNum_14 {
  width: 5.521%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#passDate {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50%;
}

#passDate_title {
  width: 38.7%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid black;
  border-right: 1px solid black;
}

#passDate_1,
#passDate_2 {
  width: 16%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
}

#passDate_3 {
  width: 29.3%;
  height: 100%;
  border-right: 1px solid black;

  display: flex;
  align-items: center;
  justify-content: center;
}

#st2 {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 11.8%;
}

#st21 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 12.5%;
  height: 100%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
}

#departName {
  width: 87.5%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
}

#departName input {
  width: 99%;
  height: 98%;
}

#st3 {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 11.8%;
}

#st31 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 37.5%;
  height: 100%;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#reason {
  width: 62.5%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#reason input {
  width: 98%;
  height: 98%;
}

#st4 {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 11.8%;
}

#st41 {
  width: 42.5%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#st42 {
  width: 28.3%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#st43 {
  width: 29.2%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#st5 {
  width: 100%;
  height: 32.3%;
  display: flex;
  flex-direction: row;
}

#st51 {
  width: 12.5%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#st511 {
  width: 100%;
  height: 33.333%;
  display: flex;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#st512 {
  width: 100%;
  height: 33.333%;
  display: flex;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#st513 {
  width: 100%;
  height: 33.334%;
  display: flex;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#st511 span,
#st512 span,
#st513 span {
  padding-left: 1%;
}

#st52 {
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#lastNameBel,
#firstNameBel {
  width: 100%;
  height: 33.333%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#middleNameBel {
  width: 100%;
  height: 33.334%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#st53 {
  width: 28.3%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#lastNameRus,
#firstNameRus {
  width: 100%;
  height: 33.333%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#middleNameRus {
  width: 100%;
  height: 33.334%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#st54 {
  width: 29.2%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#lastNameLat {
  width: 100%;
  height: 33.333%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#firstNameLat {
  width: 100%;
  height: 33.333%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#birthDate {
  width: 100%;
  height: 33.334%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#st5431 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 38.2%;
  height: 100%;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#birthDate_1,
#birthDate_2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 17.6%;
  height: 100%;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#birthDate_3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 26.6%;
  height: 100%;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#st6 {
  display: flex;
  align-items: center;
  width: 100%;
  height: 9.5%;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#st6 span {
  padding-left: 0.2%;
}

#second {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
}

#sp1 {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 23.4%;
}

#sp11 {
  display: flex;
  flex-direction: column;
  width: 13.5%;
  height: 100%;
}

#sp111 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 25%;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}

#sp112 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 25%;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}

#sp113 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 25%;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}

#sp114 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 25%;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}

#sp12 {
  display: flex;
  flex-direction: column;
  width: 39.85%;
  height: 100%;
}

#cityBel,
#districtBel,
#regionBel {
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#countryBel {
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sp13 {
  display: flex;
  flex-direction: column;
  width: 39.85%;
  height: 100%;
}

#cityRus,
#districtRus,
#regionRus {
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#countryRus {
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sp14 {
  display: flex;
  flex-direction: column;
  width: 6.8%;
  height: 100%;
}

#sp141 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sp1411 {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#sp1412 {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

#sp142 {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50%;
}

#sexM,
#sexW {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sexM input,
#sexW input {
  display: none;
}

#sexM label,
#sexW label {
  color: #000;
  cursor: default;
  font-weight: normal;
  line-height: 30px;
  padding: 10px 0;
  vertical-align: middle;
}

#sexM label:before,
#sexW label:before {
  content: " ";
  color: #000;
  display: inline-block;
  font: 1.6rem Arial;
  position: relative;
  text-align: center;
  text-indent: 0px;
  width: 2rem;
  height: 2rem;
  background: #fff;
  border-image: initial;
  vertical-align: middle;
}

#sexM label:hover,
#sexW label:hover {
  border: 1px solid black;
}

#sexM input:checked + label:before,
#sexW input:checked + label:before {
  content: "X";
}

#sp15 {
  width: 100%;
  height: 5.7%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#sp15_1 {
  width: 13.5%;
  height: 100%;
  display: flex;
  align-items: center;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
}

#sp15_1 span {
  padding-left: 5%;
}

#nationality {
  width: 28.833%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#nationality input {
  padding-left: 1.5%;
}

#sp15_3 {
  width: 11.017%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
}

#identNumber {
  width: 16.68%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sp15_5 {
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
}

#arrivalDate_1 {
  width: 3.94%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
}

#arrivalDate_2 {
  width: 3.94%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
}

#arrivalDate_3 {
  width: 7.09%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
}

#sp2 {
  width: 100%;
  height: 4.7%;
  display: flex;
  flex-direction: row;
}

#sp21 {
  width: 13.5%;
  height: 100%;
  display: flex;
  align-items: center;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}

#sp21 span {
  padding-left: 5%;
  font-size: 0.68rem;
}

#sp22 {
  width: 28.833%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sp23 {
  width: 28.833%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sp24 {
  width: 28.834%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sp3 {
  width: 100%;
  height: 5.78%;
  display: flex;
  flex-direction: row;
}

#sp31 {
  width: 13.5%;
  height: 100%;
  display: flex;
  align-items: center;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sp31 span {
  padding-left: 5%;
}

#sp32,
#sp33 {
  width: 28.833%;
  height: 100%;
}

#sp34 {
  width: 28.834%;
  height: 100%;
}

#spouseLastNameBel,
#spouseMiddleNameBel {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#spouseFirstNameBel {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sp4 {
  width: 100%;
  height: 5.78%;
  display: flex;
  flex-direction: row;
}

#sp41 {
  width: 13.5%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}

#lastNameBeforeWedding {
  width: 28.833%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#spouseBirthDate {
  width: 28.833%;
  height: 100%;
  display: flex;
  flex-direction: row;
}

#sp431 {
  width: 44.18%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#birthDate_4 {
  width: 13.95%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#birthDate_5 {
  width: 16.28%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#birthDate_6 {
  width: 25.59%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#regDate {
  width: 28.834%;
  height: 100%;
  display: flex;
  flex-direction: row;
}

#sp441 {
  width: 42.5%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#regDate_1 {
  width: 19.166%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#regDate_2 {
  width: 19.166%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#regDate_3 {
  width: 19.167%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sp5 {
  width: 100%;
  height: 5.78%;
  display: flex;
  flex-direction: row;
}

#sp51 {
  width: 13.5%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}

#certificate {
  width: 69.92%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#certificate input {
  width: 97.5%;
  height: 90%;
}

#sp53 {
  width: 5.53%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#regOfficeNum {
  width: 11.05%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sp7 {
  width: 100%;
  height: 4.38%;
  display: flex;
  flex-direction: row;
}

#sp71 {
  width: 13.5%;
  height: 100%;
  display: flex;
  align-items: center;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}

#sp71 span {
  padding-left: 5%;
}

#sp72 {
  width: 25.27%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sp73 {
  width: 24.49%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sp74 {
  width: 21.77%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sp75 {
  width: 14.97%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sp8 {
  width: 100%;
  height: 17.83%;
  display: flex;
  flex-direction: row;
}

#child {
  width: 13.5%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#child_1,
#child_2,
#child_3 {
  width: 100%;
  height: 33.333333333%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
}

#childLastName {
  width: 25.27%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#childLastName_1,
#childLastName_2,
#childLastName_3 {
  width: 100%;
  height: 33.333333333%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#childFirstName {
  width: 24.49%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#childFirstName_1,
#childFirstName_2,
#childFirstName_3 {
  width: 100%;
  height: 33.333333333%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#childMiddleName {
  width: 21.77%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#childMiddleName_1,
#childMiddleName_2,
#childMiddleName_3 {
  width: 100%;
  height: 33.333333333%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#childBirthDate_day {
  width: 3.94%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#childBirthDate_day_1,
#childBirthDate_day_2,
#childBirthDate_day_3 {
  width: 100%;
  height: 33.333333333%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#childBirthDate_month {
  width: 3.94%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#childBirthDate_month_1,
#childBirthDate_month_2,
#childBirthDate_month_3 {
  width: 100%;
  height: 33.333333333%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#childBirthDate_year {
  width: 7.09%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#childBirthDate_year_1,
#childBirthDate_year_2,
#childBirthDate_year_3 {
  width: 100%;
  height: 33.333333333%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sp9 {
  display: flex;
  align-items: center;
  width: 100%;
  height: 4.69%;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}

#sp9 span {
  padding-left: 0.7%;
}

#sp10 {
  width: 100%;
  height: 11.56%;
  display: flex;
  flex-direction: row;
}

#sp101 {
  width: 13.5%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#sp1011 {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}

#sp1012 {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}

#sp102 {
  width: 86.5%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#addressBel,
#addressRus {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#addressBel input,
#addressRus input {
  width: 98%;
  height: 93%;
}

#twoPage {
  display: flex;
  flex-direction: column;
  width: 1060px;
  height: 740px;
}

#sl1 {
  width: 100%;
  height: 4.08%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

#sl1_1 {
  width: 14.97%;
  height: 100%;
  display: flex;
  align-items: center;
  border: 1px solid black;
}

#sl1_1 span {
  padding-left: 5%;
}

#legalStatus {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#legalStatus input {
  width: 97%;
  height: 99%;
}

#sl4 {
  width: 100%;
  height: 4.08%;
  display: flex;
  flex-direction: row;
}

#sl41 {
  width: 14.97%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sl42 {
  width: 17%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sl43 {
  width: 5.44%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#date_1 {
  width: 4.08%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#date_2 {
  width: 4.08%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sl46 {
  width: 6.12%;
  height: 100%;
  display: flex;
  flex-direction: row;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#date_3 {
  width: 90%;
  height: 100%;
}

#sl462 {
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#sl47 {
  width: 14.29%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sl48 {
  width: 18.36%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#lastName {
  width: 15.66%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sl5 {
  width: 100%;
  height: 3.06%;
  display: flex;
  align-items: center;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sl5 span {
  padding-left: 0.7%;
}

#sl6 {
  width: 100%;
  height: 3.06%;
  display: flex;
  flex-direction: row;
}

#sl61 {
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}

#sl62 {
  width: 6.43%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sl63 {
  width: 10.98%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sl64 {
  width: 14.28%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sl65 {
  width: 48.31%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sl7 {
  width: 100%;
  height: 8.78%;
  display: flex;
  flex-direction: row;
}

#docName1 {
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#docName1_1 {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px dashed black;
}

#docName1_2 {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}

#docSeries_1 {
  width: 6.43%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#docNum_1 {
  width: 10.98%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sl74 {
  width: 14.28%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#docDate1 {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
}

#docDate1_1 {
  width: 28.22%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px dashed black;
}

#docDate1_2 {
  width: 28.22%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px dashed black;
}

#docDate1_3 {
  width: 43.56%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px dashed black;
}

#docRegOfficeNum_1 {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#docDepartName1 {
  width: 48.31%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#docDepartName1_1 {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px dashed black;
}

#docDepartName1_2 {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sl8 {
  width: 100%;
  height: 8.78%;
  display: flex;
  flex-direction: row;
}

#docName2 {
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#docName2_1 {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px dashed black;
}

#docName2_2 {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}

#docSeries_2 {
  width: 6.43%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#docNum_2 {
  width: 10.98%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sl84 {
  width: 14.28%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#docDate2 {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
}

#docDate2_1 {
  width: 28.22%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px dashed black;
}

#docDate2_2 {
  width: 28.22%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px dashed black;
}

#docDate2_3 {
  width: 43.56%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px dashed black;
}

#docRegOfficeNum_2 {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#docDepartName2 {
  width: 48.31%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#docDepartName2_1 {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px dashed black;
}

#docDepartName2_2 {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sl9 {
  width: 100%;
  height: 8.78%;
  display: flex;
  flex-direction: row;
}

#docName3 {
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#docName3_1 {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px dashed black;
}

#docName3_2 {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}

#docSeries_3 {
  width: 6.43%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#docNum_3 {
  width: 10.98%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sl94 {
  width: 14.28%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#docDate3 {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
}

#docDate3_1 {
  width: 28.22%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px dashed black;
}

#docDate3_2 {
  width: 28.22%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px dashed black;
}

#docDate3_3 {
  width: 43.56%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px dashed black;
}

#docRegOfficeNum_3 {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#docDepartName3 {
  width: 48.31%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#docDepartName3_1 {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px dashed black;
}

#docDepartName3_2 {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sl10 {
  width: 100%;
  height: 3.2%;
  display: flex;
  align-items: center;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}

#sl10 span {
  margin-left: 0.7%;
}

#sl11 {
  width: 100%;
  height: 4.08%;
  display: flex;
  flex-direction: row;
}

#emplName_1 {
  width: 85.7%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}

#emplName_1 input {
  width: 98%;
  height: 93%;
}

#date_4 {
  width: 4.21%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#date_5 {
  width: 4.21%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#date_6 {
  width: 5.88%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sl12 {
  width: 100%;
  height: 4.08%;
  display: flex;
  flex-direction: row;
}

#sl121 {
  width: 21.43%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}

#sl121 span,
#sl121 small {
  padding-left: 3%;
}

#emplName_2 {
  width: 64.27%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#emplName_2 input {
  width: 97%;
  height: 94%;
}

#date_7,
#date_8 {
  width: 4.21%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#date_9 {
  width: 5.88%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sl13 {
  width: 100%;
  height: 4.08%;
  display: flex;
  flex-direction: row;
}

#sl131 {
  width: 21.43%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}

#sl131 span,
#sl131 small {
  padding-left: 3%;
}

#emplName_3 {
  width: 78.57%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#emplName_3 input {
  width: 98%;
  height: 93%;
}

#sl14 {
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
}

#sl141 {
  width: 21.43%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#sl1411 {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
}

#sl14111 {
  width: 50.79%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}

#newPassportSeries {
  width: 24.605%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sl14113 {
  width: 24.605%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sl1412 {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}

#sl1412 span {
  padding-left: 4%;
}

#sl142 {
  width: 15.98%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#sl1421 {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
}

#newPassportNumber {
  width: 80.43%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sl14212 {
  width: 19.57%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sl1422 {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
}

#oldPassportSeries {
  width: 65.22%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sl14222 {
  width: 34.78%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sl143 {
  width: 14.28%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#sl1431 {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
}

#date_10,
#date_11 {
  width: 28.22%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#date_12 {
  width: 43.56%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#oldPassportNumber {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sl144 {
  width: 34.01%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#sl1441 {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
}

#sl14411 {
  width: 55.34%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sl14412 {
  width: 44.66%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sl1442 {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#date_13 {
  width: 4.21%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#date_13_1 {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#date_13_2 {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#date_14 {
  width: 4.21%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#date_14_1 {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#date_14_2 {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#date_15 {
  width: 5.88%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#date_15_1 {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#date_15_2 {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#other {
  width: 100%;
  height: 3.88%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}

#other input {
  width: 98%;
  height: 90%;
}

#sl16 {
  width: 100%;
  height: 3.5%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#sl16 span {
  font-size: 1.2rem;
}

#sl17 {
  width: 100%;
  height: 21.18%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#sl17 textarea {
  width: 98%;
  height: 100%;
}
</style>